import assert from "node:assert";
import process from "node:process";
import {
  GitHubService,
  WorkItemIntegrationBuilder,
} from "@peepr/work-tracking";
import {
  type RouteDefinition,
  createAsync,
  query,
  useSearchParams,
} from "@solidjs/router";
import { For, Show, Suspense, SuspenseList, createEffect, createMemo, createResource, createSignal } from "solid-js";
import { CycleSelector } from "~/components/CycleSelector/CycleSelector";
import {
  Card,
  CardContent,
  CardHeader,
  CardItem,
} from "~/components/card";
import { Alert, ProgressBar } from "~/components/feedback";
import styles from "./integration.module.css";
import { generateStatistics } from "./statistics";

import type { WorkItemIntegration } from "@peepr/core";
import Button from "~/components/form/Button";
import { Cache } from "~/lib/cache";

const getPRStats = query(async ({ cycleNumber, refresh = false }) => {
  "use server";

  // Generate a cache key based on the cycle number
  const cacheKey = `integration:prStats:cycle:${cycleNumber}`;

  // Try to return from cache unless refresh is true
  try {
    return await Cache.getOrSet(
      cacheKey,
      async () => {
        // This function will only execute if cache miss or refresh=true
        assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
        const github = new GitHubService(process.env.GITHUB_TOKEN);

        if (!cycleNumber) {
          throw new Error("Cycle number is required");
        }

        // Calculate start and end dates based on cycle number
        const startDate = new Date(2025, 0, 1);
        startDate.setDate(startDate.getDate() + (cycleNumber - 1) * 7);

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);

        const pullRequests = [];

        // Get pull requests from the calculated date range for the cycle
        for await (const pr of github.getPullRequestsByDateRange(startDate.toISOString(), endDate.toISOString())) {
          const builder = new WorkItemIntegrationBuilder();
          builder.setPullRequest(pr);

          const runs = await github.getAllWorkflowRunsForPR(pr.number);
          for (const run of runs) {
            builder.setWorkflowRun(run);
          }

          await Promise.all(
            runs.map(async (run) => {
              const usage = await github.getWorkflowRunUsage(run.id);
              builder.setWorkflowUsage({ ...usage });
            }),
          );

          const stats = builder.build();
          const prStats = {
            prNumber: pr.number,
            title: pr.title,
            createdAt: pr.created_at,
            updatedAt: pr.updated_at,
            mergedAt: pr.closed_at,
            closedAt: pr.closed_at,
            prTimeOpen: stats.prTimeOpen.toHumanReadable(),
            pullRequestCheckRuns: stats.pullRequestCheckRuns,
            totalDuration: stats.totalDuration.toHumanReadable(),
          };

          pullRequests.push(prStats);

          // Limit to 10 PRs
          if (pullRequests.length >= 10) break;
        }

        return pullRequests;
      },
      // Cache for 15 minutes
      920 * 60,
      // Pass the refresh flag to force a cache refresh when needed
      refresh
    );
  } catch (error) {
    console.error("Failed to fetch PR stats:", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}, "integration-stats");

export const route = {
  preload({ params, location }) {
    const searchParams = new URLSearchParams(location.search);
    // Default to the current cycle if no cycle number provided
    const currentDate = new Date();
    const startDate = new Date(2025, 0, 1);
    const daysSinceStart = Math.ceil(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const defaultCycleNumber = Math.max(1, Math.ceil(daysSinceStart / 7));



    getPRStats({ cycleNumber: defaultCycleNumber });
  },
} satisfies RouteDefinition;

// Format dates for display
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export default function Integration() {
  // Calculate current cycle as default
  const currentDate = new Date();
  const startDate = new Date(2025, 0, 1);
  const daysSinceStart = Math.ceil(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const defaultCycleNumber = Math.max(1, Math.ceil(daysSinceStart / 7));

  const [searchParams, setSearchParams] = useSearchParams();
  const [cycleNumber, setCycleNumber] = createSignal(Number(searchParams.cycle) || defaultCycleNumber);
  const [refreshing, setRefreshing] = createSignal(searchParams.refresh === "true");

  // Synchronize URL changes with our local state
  createEffect(() => {
    const cycleFromParams = Number(searchParams.cycle) || defaultCycleNumber;
    if (cycleFromParams !== cycleNumber()) {
      setCycleNumber(cycleFromParams);
    }

    const refreshFromParams = searchParams.refresh === "true";
    if (refreshFromParams !== refreshing()) {
      setRefreshing(refreshFromParams);
    }
  });

  const prStats = createAsync(() => getPRStats({
    cycleNumber: cycleNumber(),
    refresh: refreshing()
  }));

  // Calculate aggregate statistics
  const statistics = createAsync(async () => {
    return generateStatistics(prStats() as WorkItemIntegration[]);
  });

  // Function to handle data refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setSearchParams({
      cycle: cycleNumber().toString(),
      refresh: "true"
    });
  };

  // Handle cycle selection change
  const handleCycleChange = (cycleData: {
    cycleNumber: number,
    startDate: Date,
    endDate: Date
  }) => {
    setCycleNumber(cycleData.cycleNumber);
    setRefreshing(false);
    setSearchParams({
      cycle: cycleData.cycleNumber.toString(),
      refresh: "false"
    });
  };

  // Format dates for display
  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const dateRangeDisplay = createMemo(() => {
    // Calculate the date range from the cycle number
    const start = new Date(2025, 0, 1);
    start.setDate(start.getDate() + (cycleNumber() - 1) * 7);

    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    return `${formatDate(start.toISOString())} - ${formatDate(end.toISOString())}`;
  });

  return (
    <main class="main-container">
      <h1>Pull Request Statistics</h1>

      <Card aria-labelledby="stats-summary">
        <h2 id="stats-summary" class="visually-hidden">Statistics Summary</h2>

        <div class={styles["date-range-container"]}>
          <CycleSelector
            value={cycleNumber()}
            onChange={handleCycleChange}
            ariaLabel="Select cycle for PR statistics"
          />

          <Alert type="info" class={styles["date-range"]}>
            <span class={styles["date-range__value"]}>{dateRangeDisplay()}</span>
            <Button
              size="sm"
              variant="danger"
              onClick={handleRefresh}

              title="Note, querying this data is expensive, only do this when you know there's a change to sync"
              disabled={refreshing()}
            >
              {refreshing() ? "Refreshing..." : "Refresh Cache"}
            </Button>
          </Alert>
        </div>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <Show
            when={!("error" in (prStats() || {}))}
            fallback={
              <Alert type="error">
                Error: {(prStats() as { error: string }).error}
              </Alert>
            }
          >
            <Show when={statistics()}>
              {(stats) => (
                <>
                  <div class={styles["stats-grid"]}>
                    <Card variant="subtle">
                      <CardContent>
                        <span class={styles["stats-card__title"]}>Total PRs</span>
                        <span class={styles["stats-card__value"]}>{stats().totalPRs}</span>
                      </CardContent>
                    </Card>

                    <Card variant="subtle">
                      <CardContent>
                        <span class={styles["stats-card__title"]}>Total CI Runs</span>
                        <span class={styles["stats-card__value"]}>{stats().totalCIRuns}</span>
                      </CardContent>
                    </Card>

                    <Card variant="subtle">
                      <CardContent>
                        <span class={styles["stats-card__title"]}>Median CI Duration</span>
                        <span class={styles["stats-card__value"]}>{stats().ciDuration.median}</span>
                      </CardContent>
                    </Card>

                    <Card variant="subtle">
                      <CardContent>
                        <span class={styles["stats-card__title"]}>Median PR Open Time</span>
                        <span class={styles["stats-card__value"]}>{stats().openTime.median}</span>
                      </CardContent>
                    </Card>
                  </div>

                  <Card variant="subtle">
                    <CardHeader title="Detailed Statistics" />
                    <CardContent>
                      <table
                        aria-label="Detailed PR Statistics"
                      >
                        <thead>
                          <tr>
                            <th class={styles["stats-table__header"]}>Metric</th>
                            <th class={styles["stats-table__header"]}>Min</th>
                            <th class={styles["stats-table__header"]}>Q1</th>
                            <th class={styles["stats-table__header"]}>Median</th>
                            <th class={styles["stats-table__header"]}>Q3</th>
                            <th class={styles["stats-table__header"]}>Max</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class={styles["stats-table__row"]}>
                            <th class={styles["stats-table__header"]}>CI Duration</th>
                            <td class={styles["stats-table__cell"]}>
                              {stats().ciDuration.range.min}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().ciDuration.quartiles.q1}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().ciDuration.quartiles.q2}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().ciDuration.quartiles.q3}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().ciDuration.range.max}
                            </td>
                          </tr>
                          <tr class={styles["stats-table__row"]}>
                            <th class={styles["stats-table__header"]}>
                              PR Open Time
                            </th>
                            <td class={styles["stats-table__cell"]}>
                              {stats().openTime.range.min}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().openTime.quartiles.q1}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().openTime.quartiles.q2}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().openTime.quartiles.q3}
                            </td>
                            <td class={styles["stats-table__cell"]}>
                              {stats().openTime.range.max}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </>
              )}
            </Show>

          </Show>
        </Suspense>
      </Card>
      <Card>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <Show
            when={!("error" in (prStats() || {}))}
            fallback={
              <Alert type="error">
                Error: {(prStats() as { error: string }).error}
              </Alert>
            }
          >
            <CardHeader
              title="Pull Request Details"
              count={Array.isArray(prStats()) ? prStats().length : 0}
            />
            <CardContent>
              <For each={Array.isArray(prStats()) ? prStats() : []}>
                {(pr) => (
                  <CardItem>
                    <>
                      <div class={styles["pr-item__icon"]}>📊</div>
                      <div class={styles["pr-item__content"]}>
                        <div class={styles["pr-item__title"]}>
                          <span class={styles["pr-item__title-number"]}>#{pr.prNumber}</span> {pr.title}
                        </div>
                        <div class={styles["pr-item__details"]}>
                          <div class={styles["pr-item__stat"]}>
                            <span>Created: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.createdAt ? formatDate(pr.createdAt) : "Unknown"}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>Closed: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.closedAt ? formatDate(pr.closedAt) : "Open"}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>Time Open: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.prTimeOpen}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>Total CI Duration: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.totalDuration}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>CI Runs: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.pullRequestCheckRuns}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  </CardItem>
                )}
              </For>
            </CardContent>
          </Show>
        </Suspense>
      </Card>
    </main >
  );
}
