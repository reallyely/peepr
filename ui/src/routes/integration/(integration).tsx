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
import { For, Show, Suspense } from "solid-js/web";
import {
  Card,
  CardContent,
  CardHeader,
  CardItem,
} from "~/components/card/card";
import { Alert, ProgressBar } from "~/components/feedback";
import styles from "./integration.module.css";

import type { WorkItemIntegration } from "@peepr/core";
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


          pullRequests.push(stats);

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

export default function Integration() {
  // Default to last 30 days if no start date provided
  const defaultStart = new Date("2025-02-01");
  defaultStart.setDate(defaultStart.getDate() - 30);

  const [searchParams, setSearchParams] = useSearchParams();
  const start = searchParams.start || defaultStart.toISOString();
  const end = searchParams.end || undefined;

  const refresh = searchParams.refresh === "true";

  const prStats = createAsync(() => getPRStats({ start, end, refresh }));

  // Function to handle data refresh
  const handleRefresh = () => {
    setSearchParams({ ...searchParams, refresh: "true" });
    // Reset the refresh parameter after fetching
  };

  return (
    <div class="main-container">
      <div class="main-container">
        <div class={styles.header}>
          <h2>Pull Request Statistics</h2>
          <button
            type="button"
            onClick={handleRefresh}
            class={styles.refresh_button}
            disabled={refresh}
            aria-label="Refresh data"
          >
            {refresh ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

        <Card>
          <Suspense fallback={<ProgressBar indeterminate value={50} />}>
            <Show
              when={!("error" in (prStats() || {}))}
              fallback={
                <Alert class={styles.error}>
                  Error: {(prStats() as { error: string }).error}
                </Alert>
              }
            >
              <CardHeader
                title="Pull Request Analytics"
                count={Array.isArray(prStats()) ? prStats().length : 0}
              />
              <CardContent>
                <For each={Array.isArray(prStats()) ? prStats() : []}>
                  {(pr: WorkItemIntegration) => (
                    <CardItem>
                      <div class={styles.integration__icon}>📊</div>
                      <div class={styles.integration__content}>
                        <div class={styles.integration__title}>
                          <span>#{pr.prNumber}</span> {pr.title}
                        </div>
                        <div class={styles.integration__details}>
                          <div class={styles.integration__timing}>
                            <span>Time Open: </span>
                            <span class={styles.integration__value}>
                              {pr.prTimeOpen}
                            </span>
                          </div>
                          <div class={styles.integration__timing}>
                            <span>Total CI Duration: </span>
                            <span class={styles.integration__value}>
                              {pr.totalDuration}
                            </span>
                          </div>
                          <div class={styles.integration__timing}>
                            <span>CI Runs: </span>
                            <span class={styles.integration__value}>
                              {pr.pullRequestCheckRuns}
                            </span>
                          </div>
                        </div>

                        {/* <div class={styles.integration__workflows}>
                        <h4 class={styles.integration__subtitle}>Workflows</h4>
                        <ul class={styles.integration__workflow_list}>
                          <For each={pr.workflows}>
                            {(workflow) => (
                              <li class={styles.integration__workflow_item}>
                                <span class={styles.integration__workflow_name}>{workflow.name}</span>
                                <span class={styles.integration__workflow_stats}>
                                  Runs: {workflow.runCount} | Duration: {workflow.totalDuration}
                                </span>
                              </li>
                            )}
                          </For>
                        </ul>
                      </div> */}
                      </div>
                    </CardItem>
                  )}
                </For>
              </CardContent>
            </Show>
          </Suspense>
        </Card>
      </div>
    </div>
  );
}
