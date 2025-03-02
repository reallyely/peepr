import assert from "node:assert";
import process from "node:process";
import { GitHubService } from '@peepr/work-tracking';
import { type RouteDefinition, createAsync, query } from "@solidjs/router";
import { For, Suspense } from "solid-js/web";
import { Card, CardContent, CardHeader, CardItem } from "~/components/card/card";
import { ProgressBar, Skeleton } from "~/components/feedback";
import styles from "./pull-requests.module.css";

const getPullRequests = query(async () => {
  "use server"
  try {
    assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
    const githubService = new GitHubService(process.env.GITHUB_TOKEN);

    // Get pull requests from the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const startDate = thirtyDaysAgo.toISOString();

    // Collect the pull requests from the generator
    const pullRequests = [];
    let count = 0;

    for await (const pr of githubService.getPullRequestsByDateRange(startDate)) {
      pullRequests.push(pr);
      count++;

      // Limit to 10 PRs
      if (count >= 10) break;
    }

    return pullRequests;
  } catch (error) {
    console.error("Failed to fetch pull requests:", error);
    return { error: "Failed to fetch pull requests" };
  }
}, "pullRequests");

export const route = {
  preload() { getPullRequests() }
} satisfies RouteDefinition;

export default function PullRequests() {
  const pullRequests = createAsync(() => getPullRequests());

  return (
    <div class="main-container">
      <h2>Recent Merged Pull Requests</h2>

      <Card>
        <Suspense fallback={<ProgressBar indeterminate value={50} />} >
          <CardHeader title="Pull Requests" count={pullRequests()?.length} />
          <CardContent>
            <For each={pullRequests()}>
              {(pr) => (
                <CardItem>
                  <div class={styles.pr__icon}>📄</div>
                  <div class={styles.pr__content}>
                    <div class={styles.pr__title}>
                      <a href={pr.html_url} target="_blank" rel="noopener noreferrer">
                        {pr.title}
                      </a>
                    </div>
                    <div class={styles.pr__details}>
                      <span class={styles.pr__number}>#{pr.number}</span>
                      <span class={styles.pr__author}>
                        by <span class={styles.pr__author_name}>{pr.user?.login}</span>
                      </span>
                      <span class={styles.pr__date}>
                        merged on {new Date(pr.closed_at || pr.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardItem>
              )}
            </For>
          </CardContent>
        </Suspense>
      </Card>
    </div >
  );
}
