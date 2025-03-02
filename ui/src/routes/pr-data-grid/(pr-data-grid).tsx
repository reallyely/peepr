import assert from "node:assert";
import process from "node:process";
import { GitHubService } from "@peepr/work-tracking";
import { type RouteDefinition, createAsync, query } from "@solidjs/router";
import { Card, CardContent, CardHeader } from "~/components/card";
import { DataGrid } from "~/components/data-grid/data-grid";
import type { ColumnDef } from "@tanstack/solid-table";
import { getUser } from "~/lib";
import { Suspense } from "solid-js";

// Query to fetch pull requests
const getPullRequests = query(async () => {
  "use server";
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

    for await (const pr of githubService.getPullRequestsByDateRange(
      startDate
    )) {
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
  preload() {
    getUser();
    getPullRequests();
  },
} satisfies RouteDefinition;

export default function PullRequestDataGrid() {
  const user = createAsync(() => getUser(), { deferStream: true });
  const pullRequests = createAsync(() => getPullRequests(), {
    deferStream: true,
  });

  // Define columns for the DataGrid
  const columns: ColumnDef<any>[] = [
    {
      header: "Title",
      accessorKey: "title",
      cell: (info) => (
        <a
          href={info.row.original.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.getValue() as string}
        </a>
      ),
    },
    {
      header: "PR #",
      accessorKey: "number",
      cell: (info) => `#${info.getValue() as number}`,
    },
    {
      header: "Author",
      accessorKey: "user.login",
    },
    {
      header: "Merged Date",
      accessorKey: "closed_at",
      cell: (info) => {
        const date =
          (info.getValue() as string) || info.row.original.updated_at;
        return new Date(date).toLocaleDateString();
      },
    },
    {
      header: "Status",
      accessorKey: "state",
      cell: (info) => (
        <span class={`status-badge status-${info.getValue() as string}`}>
          {info.getValue() as string}
        </span>
      ),
    },
  ];

  // Handler for row clicks
  const handleRowClick = (pr: any) => {
    window.open(pr.html_url, "_blank", "noopener,noreferrer");
  };

  return (
    <div class="main-container">
      <h2>Pull Requests Data Grid</h2>

      <Card>
        <Suspense fallback={<p>Loading...</p>}>
          <CardHeader title="Pull Requests" count={pullRequests()?.length} />
          <CardContent>
            {pullRequests() && pullRequests().length > 0 ? (
              <DataGrid
                data={pullRequests()}
                columns={columns}
                onRowClick={handleRowClick}
              />
            ) : (
              <p>No pull requests found.</p>
            )}
          </CardContent>
        </Suspense>
      </Card>
    </div>
  );
}
