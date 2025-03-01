import assert from "node:assert";
import process from "node:process";
import { GitHubService } from '@peepr/work-tracking';
import { type RouteDefinition, createAsync, query } from "@solidjs/router";
import { For } from "solid-js/web";
import { getUser } from "~/lib";
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
  preload() { getUser(); getPullRequests() }
} satisfies RouteDefinition;

export default function PullRequests() {
  const user = createAsync(() => getUser(), { deferStream: true });
  const pullRequests = createAsync(() => getPullRequests(), { deferStream: true });

  return (
    <div class="main-container">
      <h2>Recent Merged Pull Requests</h2>

      <div class={styles.pull_requests}>
        <div class={styles.pull_requests__list}>
          <For each={pullRequests()}>
            {(pr) => (
              <div class={styles.pull_requests__item}>
                <div class={styles.pull_requests__title}>
                  <a href={pr.html_url} target="_blank" rel="noopener noreferrer">
                    {pr.title}
                  </a>
                </div>
                <div class={styles.pull_requests__details}>
                  <div class={styles.pull_requests__number}>#{pr.number}</div>
                  <div class={styles.pull_requests__author}>
                    by <span class={styles.pull_requests__author_name}>{pr.user?.login}</span>
                  </div>
                  <div class={styles.pull_requests__date}>
                    merged on {new Date(pr.closed_at || pr.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
