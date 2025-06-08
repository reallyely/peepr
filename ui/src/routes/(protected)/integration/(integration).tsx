import { A, type RouteDefinition, createAsync, useAction, useNavigate, useSearchParams } from "@solidjs/router";
import { ErrorBoundary, Show, Suspense, createEffect, createMemo, createSignal, useTransition } from "solid-js";
import { Card, CardContent, CardHeader, MetricCard } from "~/components/Card";
import { CycleSelector } from "~/components/CycleSelector/CycleSelector.tsx";
import { Alert, ProgressBar } from "~/components/feedback";

import styles from "./integration.module.css";

import { DataGrid } from "~/components/DataGrid";
import Button from "~/components/form/Button";

import { Cycle, DateVO, Duration } from "@peepr/core";
import { refreshCacheAction } from "./actions.ts";
import { getCycleStatistics } from "./queries.ts";

export const route = {
  preload({ location }) {
    const searchParams = new URLSearchParams(location.search);
    const repoFullName = searchParams.get("repo");

    // Default to the current cycle if no cycle number provided
    const defaultCycleNumber = Cycle.getDefaultCycleNumber();

    // Preload data
    getCycleStatistics({
      cycleNumber: Number(searchParams.get("cycle")) || defaultCycleNumber,
      repoFullName,
    });
  },
} satisfies RouteDefinition;

export default function Integration() {
  // Get default cycle number using our core Cycle class
  const defaultCycleNumber = Cycle.getDefaultCycleNumber();
  const refreshCache = useAction(refreshCacheAction);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cycleNumber, setCycleNumber] = createSignal(Number(searchParams.cycle) || defaultCycleNumber);
  const navigate = useNavigate();

  const [isPending, startTransition] = useTransition();

  // Get repository from URL params
  const repoFullName = () => searchParams.repo;

  // Redirect if no repository is selected
  if (!repoFullName()) {
    return navigate("/repositories");
  }

  // Synchronize URL changes with our local state
  createEffect(() => {
    const cycleFromParams = Number(searchParams.cycle) || defaultCycleNumber;
    if (cycleFromParams !== cycleNumber()) {
      setCycleNumber(cycleFromParams);
    }
  });

  const getIntegrationStats = createAsync(
    async () => {
      const stats = await getCycleStatistics({
        cycleNumber: cycleNumber(),
        repoFullName: repoFullName(),
      });
      return stats;
    },
    { name: "get-integration-stats" },
  );

  const getPreviousStats = createAsync(
    async () => {
      const stats = await getCycleStatistics({
        cycleNumber: cycleNumber() - 1,
        repoFullName: repoFullName(),
      });
      return stats;
    },
    { name: "get-integration-stats" },
  );

  // Function to handle data refresh with transition
  const handleRefresh = () => {
    startTransition(async () => {
      await refreshCache({ cycleNumber: cycleNumber(), repoFullName: repoFullName() });
      await getCycleStatistics({
        cycleNumber: cycleNumber(),
        repoFullName: repoFullName(),
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

  const dateRangeDisplay = createMemo(() => {
    // Calculate the date range from the cycle number using Cycle class
    const cycle = Cycle.fromCycleNumber(cycleNumber());
    return `${cycle.formatStartDate()} - ${cycle.formatEndDate()}`;
  });

  return (
    <div class="main-container">
      <Card aria-labelledby="stats-summary">

        <div class={styles["date-range-container"]}>
          <div class="flex items-center gap-md mb-md">
            <A href="/repositories" class="no-decoration">
              <Button size="sm" variant="secondary">
                ← Change Repository
              </Button>
            </A>
            <div>
              <h3 class="m-0 text-lg">{repoFullName()}</h3>
              <p class="text-sm text-secondary">Repository Statistics</p>
            </div>
          </div>

          <CycleSelector
            value={cycleNumber()}
            onChange={handleCycleChange}
            aria-label="Select cycle for PR statistics"
            autofocus
          />
          <div>
            <Button
              size="sm"
              variant="danger"
              onClick={handleRefresh}
              title="Note, querying this data is expensive, only do this when you know there's a change to sync"
              disabled={isPending()}
            >
              Refresh Cache
            </Button>
          </div>
        </div>
      </Card>
      <Card classList={{ [styles["card--pending"]]: isPending() }}>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <ErrorBoundary fallback={<Alert type="error">There was a problem fetching the data</Alert>}>
            <Show
              when={
                Object.entries(getIntegrationStats()?.statistics || {}).length > 0 && getIntegrationStats()?.statistics
              }
            >
              {(stats) => {
                return (
                  <>
                    <div class={styles["stats-grid"]}>
                      <MetricCard
                        title="Total PRs"
                        value={stats()?.totalPRs}
                        trend={() => (getPreviousStats()?.statistics?.totalPRs < stats()?.totalPRs ? "up" : "down")}
                        trendValue={() => stats()?.totalPRs - getPreviousStats()?.statistics?.totalPRs}
                        description="The total number of pull requests in this cycle"
                      />

                      <MetricCard
                        title="Total CI Runs"
                        value={stats()?.totalCIRuns}
                        trend={() =>
                          getPreviousStats()?.statistics?.totalCIRuns < stats()?.totalCIRuns ? "up" : "down"
                        }
                        trendValue={() =>
                          getPreviousStats()?.statistics?.totalCIRuns - stats()?.totalCIRuns
                        }
                      />

                      <MetricCard
                        title="Mean CI Duration"
                        value={stats()?.ciDuration.mean}
                        trend={() =>
                          Duration.fromHumanReadable(getPreviousStats()?.statistics?.ciDuration.mean).compareTo(
                            Duration.fromHumanReadable(stats()?.ciDuration.mean),
                          ) < 0
                            ? "up"
                            : "down"
                        }
                        goodQualifier="down"
                      />

                      <MetricCard
                        title="Mean PR Open Time"
                        value={stats()?.openTime.mean}
                        trend={() =>
                          Duration.fromHumanReadable(getPreviousStats()?.statistics?.openTime.mean).compareTo(
                            Duration.fromHumanReadable(stats()?.openTime.mean),
                          ) < 0
                            ? "up"
                            : "down"
                        }
                        goodQualifier="down"
                      />
                    </div>

                    <Card variant="subtle">
                      <CardHeader>Detailed Statistics</CardHeader>
                      <CardContent>
                        <DataGrid
                          data={() => [
                            {
                              metric: "CI Duration",
                              min: stats()?.ciDuration.range.min,
                              q1: stats()?.ciDuration.quartiles.q1,
                              median: stats()?.ciDuration.quartiles.q2,
                              q3: stats()?.ciDuration.quartiles.q3,
                              max: stats()?.ciDuration.range.max,
                            },
                            {
                              metric: "PR Open Time",
                              min: stats()?.openTime.range.min,
                              q1: stats()?.openTime.quartiles.q1,
                              median: stats()?.openTime.quartiles.q2,
                              q3: stats()?.openTime.quartiles.q3,
                              max: stats()?.openTime.range.max,
                            },
                          ]}
                          columns={[
                            {
                              accessorKey: "metric",
                              header: "Metric",
                              sortingFn: "alphanumeric",
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
                            },
                          ]}
                          emptyMessage="No statistical data available"
                        />
                      </CardContent>
                    </Card>
                  </>
                );
              }}
            </Show>
          </ErrorBoundary>
        </Suspense>
      </Card>
      <Card classList={{ [styles["card--pending"]]: isPending() }}>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <ErrorBoundary fallback={<Alert type="error">There was a problem fetching the data</Alert>}>
            <CardHeader count={getIntegrationStats()?.integrationEvents?.length || 0}>Pull Request Details</CardHeader>
            <CardContent>
              <DataGrid
                data={() => getIntegrationStats()?.integrationEvents}
                columns={[
                  {
                    accessorKey: "prNumber",
                    header: "PR #",
                    cell: (info) => <span>#{info.getValue() as string}</span>,
                    enableSorting: true,
                  },
                  {
                    accessorKey: "title",
                    header: "Title",
                    cell: (info) => <span>{info.getValue() as string}</span>,
                    enableSorting: true,
                  },
                  {
                    accessorKey: "createdAt",
                    header: "Created",
                    cell: (info) => (info.getValue() ? DateVO.create(String(info.getValue())).format() : "Unknown"),
                    sortingFn: "datetime",
                    enableSorting: true,
                  },
                  {
                    accessorKey: "closedAt",
                    header: "Closed",
                    cell: (info) => (info.getValue() ? DateVO.create(String(info.getValue())).format() : "Open"),
                    sortingFn: "datetime",
                    enableSorting: true,
                  },
                  {
                    accessorKey: "timeOpen",
                    header: "Time Open",
                    sortingFn: (a, b) =>
                      Duration.fromHumanReadable(a.original.timeOpen).compareTo(
                        Duration.fromHumanReadable(b.original.timeOpen),
                      ),
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
                  },
                ]}
                initialSorting={[{ id: "createdAt", desc: true }]}
                emptyMessage="No pull requests found for this cycle"
              />
            </CardContent>
          </ErrorBoundary>
        </Suspense>
      </Card>
    </div>
  );
}
