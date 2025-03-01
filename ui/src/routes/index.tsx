import { createAsync, query, type RouteDefinition } from "@solidjs/router";
import { getUser, logout } from "~/lib";
import { GitHubService } from '@peepr/work-tracking'
import process from "node:process";
import assert from "node:assert";
import { For } from "solid-js/web";

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
    <main class="w-full p-4 space-y-2">
      <h2 class="font-bold text-3xl">Hello {user()?.username}</h2>
      <h3 class="font-bold text-xl"> board</h3>

      <For each={branches()}>{(branch) => <li>{branch.name}</li>}</For>
      <form action={logout} method="post">
        <button name="logout" type="submit">
          Logout
        </button>
      </form>
    </main>
  );
}
