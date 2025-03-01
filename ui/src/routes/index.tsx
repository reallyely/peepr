import assert from "node:assert";
import process from "node:process";
import { GitHubService } from '@peepr/work-tracking'
import { type RouteDefinition, createAsync, query } from "@solidjs/router";
import { For } from "solid-js/web";
import { getUser, logout } from "~/lib";

const getBranches = query(async () => {
  "use server"
  try {
    assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
    // Assuming there's a method to get branches
    const githubService = new GitHubService(process.env.GITHUB_TOKEN);
    const branches = await githubService.getBranches();
    return branches.data;
  } catch (error) {
    console.error("Failed to fetch branches:", error);
    return { error: "Failed to fetch branches" };
  }
}, "query");

export const route = {
  preload() { getUser(); getBranches() }
} satisfies RouteDefinition;

export default function Home() {
  const user = createAsync(() => getUser(), { deferStream: true });
  const branches = createAsync(() => getBranches(), { deferStream: true });
  return (
    <div class="main-container">
      <h2 >Hello {user()?.username}</h2>

      <For each={branches()}>{(branch) => <li>{branch.name}</li>}</For>
      <form action={logout} method="post">
        <button name="logout" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
}
