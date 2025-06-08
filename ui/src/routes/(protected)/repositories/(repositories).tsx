import { A, type RouteDefinition, createAsync } from "@solidjs/router";
import { ErrorBoundary, Show, Suspense, createSignal } from "solid-js";
import { Badge } from "~/components/Badge";
import { Card, CardContent, CardHeader } from "~/components/Card";
import { DataGrid } from "~/components/DataGrid";
import { Alert, ProgressBar } from "~/components/feedback";
import Button from "~/components/form/Button";
import TextInput from "~/components/form/TextInput";
import { getRepositories } from "./queries.ts";

import styles from "./repositories.module.css";

export const route = {
  preload() {
    // Preload repositories data
    getRepositories();
  },
} satisfies RouteDefinition;

export default function Repositories() {
  const [searchTerm, setSearchTerm] = createSignal("");

  const repositories = createAsync(() => getRepositories(), {
    deferStream: true,
    name: "get-repositories"
  });

  const filteredRepositories = () => {
    const repos = repositories();
    if (!repos || !searchTerm()) return repos;

    const term = searchTerm().toLowerCase();
    return repos.filter(repo =>
      repo.name.toLowerCase().includes(term) ||
      repo.full_name.toLowerCase().includes(term)
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatVisibility = (isPrivate: boolean) => {
    return isPrivate ? "Private" : "Public";
  };

  return (
    <div class="main-container flex flex-col gap-4">
      <div class="flex flex-col">
        <h1>Select a Repository</h1>
        <p>Choose a repository to track pull request statistics and CI/CD metrics.</p>

        <TextInput
          name="repository-search"
          type="text"
          placeholder="Search repositories..."
          value={searchTerm()}
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
        />
      </div>

      <Card>
        <Suspense fallback={<ProgressBar indeterminate />}>
          <ErrorBoundary
            fallback={(error) => (
              <Alert type="error">
                <p>Failed to load repositories: {error.message}</p>
                <p>Please check your GitHub access token and try again.</p>
              </Alert>
            )}
          >
            <Show
              when={filteredRepositories() && filteredRepositories().length > 0}
              fallback={
                <Alert type="info">
                  {searchTerm()
                    ? `No repositories found matching "${searchTerm()}"`
                    : "No repositories found. Make sure you have access to GitHub repositories."
                  }
                </Alert>
              }
            >
              <CardHeader count={filteredRepositories()?.length || 0}>
                Available Repositories
              </CardHeader>
              <CardContent>
                <DataGrid
                  data={() => filteredRepositories()}
                  columns={[
                    {
                      accessorKey: "name",
                      header: "Repository",
                      cell: (info) => (
                        <div class="flex flex-col gap-xs">
                          <div class="font-semibold text-primary">
                            {info.getValue() as string}
                          </div>
                          <div class="text-sm text-tertiary">
                            {info.row.original.full_name}
                          </div>
                        </div>
                      ),
                      enableSorting: true,
                    },

                    {
                      accessorKey: "language",
                      header: "Language",
                      cell: (info) => {
                        const lang = info.getValue() as string | null;
                        return lang ? (
                          <Badge variant="info" style="soft" size="sm">
                            {lang}
                          </Badge>
                        ) : (
                          <span class="text-secondary">-</span>
                        );
                      },
                      enableSorting: true,
                    },
                    {
                      accessorKey: "private",
                      header: "Visibility",
                      cell: (info) => {
                        const isPrivate = info.getValue() as boolean;
                        return (
                          <Badge
                            variant={isPrivate ? "warning" : "success"}
                            style="soft"
                            size="sm"
                          >
                            {formatVisibility(isPrivate)}
                          </Badge>
                        );
                      },
                      enableSorting: true,
                    },
                    {
                      accessorKey: "updated_at",
                      header: "Last Updated",
                      cell: (info) => (
                        <span class="text-secondary">
                          {formatDate(info.getValue() as string)}
                        </span>
                      ),
                      sortingFn: "datetime",
                      enableSorting: true,
                    },
                    {
                      id: "actions",
                      header: "Actions",
                      cell: (info) => {
                        const repo = info.row.original;
                        return (
                          <A
                            href={`/integration?repo=${encodeURIComponent(repo.full_name)}`}
                            class="no-decoration"
                            tabIndex={-1}
                          >
                            <Button size="sm" variant="primary">
                              Select
                            </Button>
                          </A>
                        );
                      },
                      enableSorting: false,
                    },
                  ]}
                  initialSorting={[{ id: "updated_at", desc: true }]}
                  emptyMessage="No repositories found"
                />
              </CardContent>
            </Show>
          </ErrorBoundary>
        </Suspense>
      </Card>
    </div>
  );
}
