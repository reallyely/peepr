import assert from "node:assert";
import process from "node:process";
import { Cycle } from "@peepr/core";
import { GitHubService, IntegrationService } from "@peepr/integration";
import {
  type RouteDefinition,
  action,
  createAsync,
  query,
  useAction,
  useSearchParams,
} from "@solidjs/router";
import {
  For,
  Show,
  Suspense,
  createEffect,
  createMemo,
  createSignal,
  useTransition,
} from "solid-js";
import { CycleSelector } from "~/components/CycleSelector/CycleSelector";
import { Card, CardContent, CardHeader, CardItem } from "~/components/card";
import { Alert, ProgressBar } from "~/components/feedback";
import styles from "./integration.module.css";

import { DataGrid } from "~/components/data-grid";
import Button from "~/components/form/Button";
import { Cache } from "~/lib/cache";

const getPRStats = query(async ({ cycleNumber }) => {
  "use server";

  // Generate a cache key based on the cycle number
  const cacheKey = `integration:prStats:cycle:${cycleNumber}`;

  try {
    return await Cache.getOrSet(
      cacheKey,
      async () => {
        // This function will only execute if cache miss or refresh=true
        assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
        const githubService = new GitHubService(process.env.GITHUB_TOKEN);
        const integrationService = new IntegrationService(githubService);

        if (!cycleNumber) {
          throw new Error("Cycle number is required");
        }

        // Create a Cycle domain object for the selected cycle
        const startDate = new Date(2025, 0, 1);
        startDate.setDate(startDate.getDate() + (cycleNumber - 1) * 7);

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);

        const cycle = Cycle.create({
          cycleNumber,
          startDate,
          endDate
        });

        const integrationEvents = [];
        for await (const integration of integrationService.streamIntegrationsForCycle(cycle)) {
          integrationEvents.push(integration);
        }
        const statistics = await integrationService.getStatisticsForCycle(cycle, integrationEvents);

        return {
          integrationEvents: integrationEvents.map((integration) => integration.toJSON()),
          statistics: statistics.toJSON(),
        };
      },
    );
  } catch (error) {
    console.error("Failed to fetch PR stats:", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}, "integration-stats");

// Server action to invalidate cache and refresh data
const refreshCacheAction = action(async ({ cycleNumber }) => {
  "use server";
  try {
    const cacheKey = `integration:prStats:cycle:${cycleNumber}`;
    await Cache.delete(cacheKey);
    console.log(`Cleared cache for key: ${cacheKey}`);
    return { success: true, message: "Cache refreshed successfully!" };
  } catch (error) {
    console.error("Failed to refresh cache:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to refresh cache"
    };
  }
}, "refresh-cache-action");

export const route = {
  preload({ location }) {
    const searchParams = new URLSearchParams(location.search);
    // Default to the current cycle if no cycle number provided
    const currentDate = new Date();
    const startDate = new Date(2025, 0, 1);
    const daysSinceStart = Math.ceil(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    const defaultCycleNumber = Math.max(1, Math.ceil(daysSinceStart / 7));

    // Preload data
    getPRStats({
      cycleNumber: Number(searchParams.get("cycle")) || defaultCycleNumber,
    });
  },
} satisfies RouteDefinition;

export default function Integration() {
  // Calculate current cycle as default
  const currentDate = new Date();
  const startDate = new Date(2025, 0, 1);
  const daysSinceStart = Math.ceil(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const defaultCycleNumber = Math.max(1, Math.ceil(daysSinceStart / 7));
  const refreshCache = useAction(refreshCacheAction)
  const [searchParams, setSearchParams] = useSearchParams();
  const [cycleNumber, setCycleNumber] = createSignal(
    Number(searchParams.cycle) || defaultCycleNumber,
  );

  // Add transition state using Solid's useTransition hook
  const [isPending, startTransition] = useTransition();

  // Synchronize URL changes with our local state
  createEffect(() => {
    const cycleFromParams = Number(searchParams.cycle) || defaultCycleNumber;
    if (cycleFromParams !== cycleNumber()) {
      setCycleNumber(cycleFromParams);
    }
  });

  const getIntegrationStats = createAsync(
    async () => {
      const stats = await getPRStats({
        cycleNumber: cycleNumber(),
      });
      return (stats);
    },
    { name: "get-integration-stats" },
  );

  // Function to handle data refresh with transition
  const handleRefresh = () => {
    startTransition(async () => {
      await refreshCache({ cycleNumber: cycleNumber() });
      await getPRStats({
        cycleNumber: cycleNumber(),
      });
    });
  };

  // Handle cycle selection change with transition
  const handleCycleChange = (cycleData: {
    cycleNumber: number;
    startDate: Date;
    endDate: Date;
  }) => {
    startTransition(async () => {
      setCycleNumber(cycleData.cycleNumber);
      setSearchParams({
        cycle: cycleData.cycleNumber.toString(),
      });
    });
  };

  // Format dates for display
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const dateRangeDisplay = createMemo(() => {
    // Calculate the date range from the cycle number using our domain model
    const start = new Date(2025, 0, 1);
    start.setDate(start.getDate() + (cycleNumber() - 1) * 7);

    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    return `${formatDate(start.toISOString())} - ${formatDate(end.toISOString())}`;
  });

  return (
    <main class="main-container">
      <Card aria-labelledby="stats-summary">
        <h2 id="stats-summary" class="visually-hidden">
          Statistics Summary
        </h2>

        <div class={styles["date-range-container"]}>
          <CycleSelector
            value={cycleNumber()}
            onChange={handleCycleChange}
            aria-label="Select cycle for PR statistics"
            autofocus={true}
          />

          <Alert type="info" class={styles["date-range"]}>
            <span class={styles["date-range__value"]}>
              {dateRangeDisplay()}
            </span>
            <Button
              size="sm"
              variant="danger"
              onClick={handleRefresh}
              title="Note, querying this data is expensive, only do this when you know there's a change to sync"
              disabled={isPending()}
            >
              Refresh Cache
            </Button>
          </Alert>
        </div>
      </Card>
      <Card classList={{ [styles["card--pending"]]: isPending() }}>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <Show
            when={!("error" in (getIntegrationStats() || {}))}
            fallback={
              <Alert type="error">
                Error: {(getIntegrationStats() as { error: string }).error}
              </Alert>
            }
          >
            <Show
              when={
                Object.entries(getIntegrationStats()?.statistics || {}).length > 0 &&
                getIntegrationStats()?.statistics
              }
            >
              {(stats) => {
                return (
                  <>
                    <div class={styles["stats-grid"]}>
                      <Card variant="subtle">
                        <CardContent>
                          <span class={styles["stats-card__title"]}>
                            Total PRs
                          </span>
                          <span class={styles["stats-card__value"]}>
                            {stats()?.totalPRs}
                          </span>
                        </CardContent>
                      </Card>

                      <Card variant="subtle">
                        <CardContent>
                          <span class={styles["stats-card__title"]}>
                            Total CI Runs
                          </span>
                          <span class={styles["stats-card__value"]}>
                            {stats()?.totalCIRuns}
                          </span>
                        </CardContent>
                      </Card>

                      <Card variant="subtle">
                        <CardContent>
                          <span class={styles["stats-card__title"]}>
                            Median CI Duration
                          </span>
                          <span class={styles["stats-card__value"]}>
                            {stats()?.ciDuration.median}
                          </span>
                        </CardContent>
                      </Card>

                      <Card variant="subtle">
                        <CardContent>
                          <span class={styles["stats-card__title"]}>
                            Median PR Open Time
                          </span>
                          <span class={styles["stats-card__value"]}>
                            {stats()?.openTime.median}
                          </span>
                        </CardContent>
                      </Card>
                    </div>

                    <Card variant="subtle">
                      <CardHeader title="Detailed Statistics" />
                      <CardContent>
                        <DataGrid
                          data={() => [
                            {
                              metric: "CI Duration",
                              min: stats()?.ciDuration.range.min,
                              q1: stats()?.ciDuration.quartiles.q1,
                              median: stats()?.ciDuration.quartiles.q2,
                              q3: stats()?.ciDuration.quartiles.q3,
                              max: stats()?.ciDuration.range.max
                            },
                            {
                              metric: "PR Open Time",
                              min: stats()?.openTime.range.min,
                              q1: stats()?.openTime.quartiles.q1,
                              median: stats()?.openTime.quartiles.q2,
                              q3: stats()?.openTime.quartiles.q3,
                              max: stats()?.openTime.range.max
                            }
                          ]}
                          columns={[
                            {
                              accessorKey: "metric",
                              header: "Metric",
                              sortingFn: "alphanumeric"
                            },
                            {
                              accessorKey: "min",
                              header: "Min",
                            },
                            {
                              accessorKey: "q1",
                              header: "Q1",
                            },
                            {
                              accessorKey: "median",
                              header: "Median",
                            },
                            {
                              accessorKey: "q3",
                              header: "Q3",
                            },
                            {
                              accessorKey: "max",
                              header: "Max",
                            }
                          ]}
                          caption="Detailed PR Statistics"
                          emptyMessage="No statistical data available"
                        />
                      </CardContent>
                    </Card>
                  </>
                );
              }}
            </Show>
          </Show>
        </Suspense>
      </Card>
      <Card classList={{ [styles["card--pending"]]: isPending() }}>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <Show
            when={!("error" in (getIntegrationStats() || {}))}
            fallback={
              <Alert type="error">
                Error: {(getIntegrationStats() as { error: string }).error}
              </Alert>
            }
          >
            <CardHeader
              title="Pull Request Details"
              count={getIntegrationStats()?.integrationEvents?.length || 0}
            />
            <CardContent>
              <DataGrid
                data={() => getIntegrationStats()?.integrationEvents}
                columns={[
                  {
                    accessorKey: "prNumber",
                    header: "PR #",
                    cell: (info) => <span>#{info.getValue()}</span>,
                    enableSorting: true,
                  },
                  {
                    accessorKey: "title",
                    header: "Title",
                    cell: (info) => <span>{info.getValue()}</span>,
                    enableSorting: true,
                  },
                  {
                    accessorKey: "createdAt",
                    header: "Created",
                    cell: (info) => (info.getValue() ? formatDate(String(info.getValue())) : "Unknown"),
                    enableSorting: true,
                  },
                  {
                    accessorKey: "closedAt",
                    header: "Closed",
                    cell: (info) => (info.getValue() ? formatDate(String(info.getValue())) : "Open"),
                    enableSorting: true,
                  },
                  {
                    accessorKey: "timeOpen",
                    header: "Time Open",
                    enableSorting: true,
                  },
                  {
                    accessorKey: "totalDuration",
                    header: "CI Duration",
                    enableSorting: true,
                  },
                  {
                    accessorKey: "checkRuns",
                    header: "CI Runs",
                    enableSorting: true,
                  }
                ]}
                initialSorting={[{ id: "createdAt", desc: true }]}
                emptyMessage="No pull requests found for this cycle"
              />
            </CardContent>
          </Show>
        </Suspense>
      </Card>
    </main>
  );
}
