import assert from "node:assert";
import process from "node:process";
import {
  GitHubService,
  WorkItemIntegrationBuilder
} from "@peepr/work-tracking";
import { type RouteDefinition, createAsync, query, useSearchParams } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js/web";
import { Card, CardContent, CardHeader, CardItem } from "~/components/card/card";
import { ProgressBar } from "~/components/feedback";
import styles from "./integration.module.css";

const getPRStats = query(async ({ start, end }) => {
  "use server"
  try {
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
          builder.setWorkflowUsage({ ...usage, runId: run.id });
        })
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
  } catch (error) {
    console.error("Failed to fetch PR stats:", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}, "integration-stats");

export const route = {
  preload({ params, location }) {
    // Default to last 30 days if no start date provided
    const defaultStart = new Date();
    defaultStart.setDate(defaultStart.getDate() - 30);

    const searchParams = new URLSearchParams(location.search);
    const start = searchParams.get('start') || defaultStart.toISOString();
    const end = searchParams.get('end') || undefined;

    getPRStats({ start, end });
  }
} satisfies RouteDefinition;

export default function Integration() {
  // Default to last 30 days if no start date provided
  const defaultStart = new Date();
  defaultStart.setDate(defaultStart.getDate() - 30);

  const [searchParams] = useSearchParams();
  const start = searchParams.start || defaultStart.toISOString();
  const end = searchParams.end || undefined;

  const prStats = createAsync(() => getPRStats({ start, end }));

  return (
    <div class="main-container">
      <h2>Pull Request Statistics</h2>

      <Card>
        <Suspense fallback={<ProgressBar indeterminate value={50} />}>
          <Show when={!('error' in (prStats() || {}))} fallback={
            <div class={styles.error}>
              Error: {(prStats() as { error: string }).error}
            </div>
          }>
            <CardHeader title="Pull Request Analytics" count={Array.isArray(prStats()) ? prStats().length : 0} />
            <CardContent>
              <For each={Array.isArray(prStats()) ? prStats() : []}>
                {(pr) => (
                  <CardItem>
                    <div class={styles.integration__icon}>📊</div>
                    <div class={styles.integration__content}>
                      <div class={styles.integration__title}>
                        <span>#{pr.prNumber}</span> {pr.title}
                      </div>
                      <div class={styles.integration__details}>
                        <div class={styles.integration__timing}>
                          <span>Time Open: </span>
                          <span class={styles.integration__value}>{pr.prTimeOpen}</span>
                        </div>
                        <div class={styles.integration__timing}>
                          <span>Total CI Duration: </span>
                          <span class={styles.integration__value}>{pr.totalDuration}</span>
                        </div>
                        <div class={styles.integration__timing}>
                          <span>CI Runs: </span>
                          <span class={styles.integration__value}>{pr.pullRequestCheckRuns}</span>
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
  );
}
