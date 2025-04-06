import assert from "node:assert";
import process from "node:process";
import { GitHubService, GithubIntegrationEventBuilder } from "@peepr/integration";
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
import { generateStatistics } from "./statistics";

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
        const workItemIntegrations = [];

        // Get pull requests from the calculated date range for the cycle
        for await (const pr of github.getPullRequestsByDateRange(
          startDate.toISOString(),
          endDate.toISOString(),
        )) {
          const builder = new GithubIntegrationEventBuilder();
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
          workItemIntegrations.push(stats);

          const prStats = {
            prNumber: pr.number,
            title: pr.title,
            createdAt: pr.created_at,
            updatedAt: pr.updated_at,
            mergedAt: pr.pull_request.merged_at,
            closedAt: pr.closed_at,
            prTimeOpen: stats?.timeOpen.toHumanReadable(),
            pullRequestCheckRuns: stats?.checkRuns,
            totalDuration: stats?.totalDuration.toHumanReadable(),
          };

          pullRequests.push(prStats);

        }

        // Calculate statistics from the collected data
        const statistics = generateStatistics(workItemIntegrations);

        return {
          pullRequests,
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

  const prStatsData = createAsync(
    async () => {
      const stats = await getPRStats({
        cycleNumber: cycleNumber(),
      });
      return stats;
    },
    { name: "get-integration-stats" },
  );

  // Function to handle data refresh with transition
  const handleRefresh = () => {
    startTransition(async () => {
      const res = await refreshCache({ cycleNumber: cycleNumber() });
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
            when={!("error" in (prStatsData() || {}))}
            fallback={
              <Alert type="error">
                Error: {(prStatsData() as { error: string }).error}
              </Alert>
            }
          >
            <Show
              when={
                Object.entries(prStatsData()?.statistics || {}).length > 0 &&
                prStatsData()?.statistics
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
                        <table aria-label="Detailed PR Statistics">
                          <thead>
                            <tr>
                              <th class={styles["stats-table__header"]}>
                                Metric
                              </th>
                              <th class={styles["stats-table__header"]}>Min</th>
                              <th class={styles["stats-table__header"]}>Q1</th>
                              <th class={styles["stats-table__header"]}>
                                Median
                              </th>
                              <th class={styles["stats-table__header"]}>Q3</th>
                              <th class={styles["stats-table__header"]}>Max</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class={styles["stats-table__row"]}>
                              <th class={styles["stats-table__header"]}>
                                CI Duration
                              </th>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.ciDuration.range.min}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.ciDuration.quartiles.q1}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.ciDuration.quartiles.q2}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.ciDuration.quartiles.q3}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.ciDuration.range.max}
                              </td>
                            </tr>
                            <tr class={styles["stats-table__row"]}>
                              <th class={styles["stats-table__header"]}>
                                PR Open Time
                              </th>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.openTime.range.min}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.openTime.quartiles.q1}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.openTime.quartiles.q2}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.openTime.quartiles.q3}
                              </td>
                              <td class={styles["stats-table__cell"]}>
                                {stats()?.openTime.range.max}
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
            when={!("error" in (prStatsData() || {}))}
            fallback={
              <Alert type="error">
                Error: {(prStatsData() as { error: string }).error}
              </Alert>
            }
          >
            <CardHeader
              title="Pull Request Details"
              count={prStatsData()?.pullRequests?.length || 0}
            />
            <CardContent>
              <For each={prStatsData()?.pullRequests || []}>
                {(pr) => (
                  <CardItem>
                    <>
                      <div class={styles["pr-item__icon"]}>📊</div>
                      <div class={styles["pr-item__content"]}>
                        <div class={styles["pr-item__title"]}>
                          <span class={styles["pr-item__title-number"]}>
                            #{pr.prNumber}
                          </span>{" "}
                          {pr.title}
                        </div>
                        <div class={styles["pr-item__details"]}>
                          <div class={styles["pr-item__stat"]}>
                            <span>Created: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.createdAt
                                ? formatDate(pr.createdAt)
                                : "Unknown"}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>Closed: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.closedAt ? formatDate(pr.closedAt) : "Open"}
                            </span>
                          </div>
                          <div class={styles["pr-item__stat"]}>
                            <span>Merged: </span>
                            <span class={styles["pr-item__stat-value"]}>
                              {pr.mergedAt ? formatDate(pr.mergedAt) : "Open"}
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
    </main>
  );
}
