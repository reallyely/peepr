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
import { For, Show, Suspense, createMemo } from "solid-js";
import { CycleSelector } from "~/components/CycleSelector/CycleSelector";
import {
  Card,
  CardContent,
  CardHeader,
  CardItem,
} from "~/components/card";
import { Alert, ProgressBar } from "~/components/feedback";
import styles from "./integration.module.css";

import type { WorkItemIntegration } from "@peepr/core";
import Button from "~/components/form/Button";
import { Cache } from "~/lib/cache";

const getPRStats = query(async ({ start, end, refresh = false }) => {
  "use server";

  // Generate a cache key based on the parameters
  const cacheKey = `integration:prStats:${start}:${end || "noend"}`;

  // Try to return from cache unless refresh is true
  try {
    return await Cache.getOrSet(
      cacheKey,
      async () => {
        // This function will only execute if cache miss or refresh=true
        assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
        const github = new GitHubService(process.env.GITHUB_TOKEN);

        if (!start) {
          throw new Error("Start date is required");
        }

        const pullRequests = [];

        // Get pull requests from the specified date range
        for await (const pr of github.getPullRequestsByDateRange(start, end)) {
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
      refresh === true,
    );
  } catch (error) {
    console.error("Failed to fetch PR stats:", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}, "integration-stats");

export const route = {
  preload({ params, location }) {
    // Default to last 30 days if no start date provided
    const defaultStart = new Date("2025-02-01");
    defaultStart.setDate(defaultStart.getDate() - 30);

    const searchParams = new URLSearchParams(location.search);
    const start = searchParams.get("start") || defaultStart.toISOString();
    const end = searchParams.get("end") || undefined;

    getPRStats({ start, end });
  },
} satisfies RouteDefinition;

// Helper functions for statistics calculations
const calculateMedian = (values: number[]): number => {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

const calculateRange = (values: number[]): { min: number; max: number } => {
  if (values.length === 0) return { min: 0, max: 0 };

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
};

const calculateQuartiles = (
  values: number[],
): { q1: number; q2: number; q3: number } => {
  if (values.length === 0) return { q1: 0, q2: 0, q3: 0 };

  const sorted = [...values].sort((a, b) => a - b);
  const q2 = calculateMedian(sorted);

  const lowerHalf = sorted.slice(0, Math.floor(sorted.length / 2));
  const upperHalf =
    sorted.length % 2 === 0
      ? sorted.slice(Math.floor(sorted.length / 2))
      : sorted.slice(Math.floor(sorted.length / 2) + 1);

  return {
    q1: calculateMedian(lowerHalf),
    q2,
    q3: calculateMedian(upperHalf),
  };
};

// Convert duration string to minutes for calculation
const durationToMinutes = (duration: string): number => {
  if (!duration) return 0;

  const hourMatch = duration.match(/(\d+)h/);
  const minMatch = duration.match(/(\d+)m/);

  const hours = hourMatch ? Number.parseInt(hourMatch[1], 10) : 0;
  const minutes = minMatch ? Number.parseInt(minMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

// Format minutes back to human-readable duration
const minutesToDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export default function Integration() {
  // Default to last 30 days if no start date provided
  const defaultStart = new Date("2025-02-01");
  defaultStart.setDate(defaultStart.getDate() - 30);

  const [searchParams, setSearchParams] = useSearchParams();
  const start = searchParams.start || defaultStart.toISOString();
  const end = searchParams.end || undefined;

  const refresh = searchParams.refresh === "true";

  const prStats = createAsync(() => getPRStats({ start, end, refresh }));

  // Calculate aggregate statistics
  const statistics = createMemo(() => {
    if (!Array.isArray(prStats())) return null;

    const prs = prStats() as WorkItemIntegration[];

    // Extract CI durations and PR open times
    const ciDurations = prs.map((pr) => durationToMinutes(pr.totalDuration));
    const openTimes = prs.map((pr) => durationToMinutes(pr.prTimeOpen));

    return {
      ciDuration: {
        median: minutesToDuration(calculateMedian(ciDurations)),
        range: {
          min: minutesToDuration(calculateRange(ciDurations).min),
          max: minutesToDuration(calculateRange(ciDurations).max),
        },
        quartiles: {
          q1: minutesToDuration(calculateQuartiles(ciDurations).q1),
          q2: minutesToDuration(calculateQuartiles(ciDurations).q2),
          q3: minutesToDuration(calculateQuartiles(ciDurations).q3),
        },
      },
      openTime: {
        median: minutesToDuration(calculateMedian(openTimes)),
        range: {
          min: minutesToDuration(calculateRange(openTimes).min),
          max: minutesToDuration(calculateRange(openTimes).max),
        },
        quartiles: {
          q1: minutesToDuration(calculateQuartiles(openTimes).q1),
          q2: minutesToDuration(calculateQuartiles(openTimes).q2),
          q3: minutesToDuration(calculateQuartiles(openTimes).q3),
        },
      },
      totalPRs: prs.length,
      totalCIRuns: prs.reduce((sum, pr) => sum + pr.pullRequestCheckRuns, 0),
    };
  });

  // Function to handle data refresh
  const handleRefresh = () => {
    setSearchParams({ ...searchParams, refresh: "true" });
  };

  // Handle cycle selection change
  const handleCycleChange = (cycleData: {
    cycleNumber: number,
    startDate: Date,
    endDate: Date
  }) => {
    setSearchParams({
      start: cycleData.startDate.toISOString(),
      end: cycleData.endDate.toISOString(),
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
    const startDate = formatDate(start);
    const endDate = end ? formatDate(end) : 'Present';
    return `${startDate} - ${endDate}`;
  });

  return (
    <main class="main-container">
      <h1>Pull Request Statistics</h1>

      <Suspense fallback={<ProgressBar indeterminate value={50} />}>
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
              <Card aria-labelledby="stats-summary">
                <h2 id="stats-summary" class="visually-hidden">Statistics Summary</h2>


                <div class={styles["date-range-container"]}>
                  <CycleSelector
                    onChange={handleCycleChange}
                    ariaLabel="Select date range for statistics"
                  />

                  <Alert type="info" class={styles["date-range"]}>
                    <span class={styles["date-range__value"]}>{dateRangeDisplay()}</span>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={handleRefresh}

                      title="Note, querying this data is expensive, only do this when you know there's a change to sync"
                      disabled={refresh}
                    >
                      {refresh ? "Refreshing..." : "Refresh Cache"}
                    </Button>
                  </Alert>
                </div>

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
              </Card>
            )}
          </Show>

          <Card>
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
          </Card>
        </Show>
      </Suspense>
    </main >
  );
}
