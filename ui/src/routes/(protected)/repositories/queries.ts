import { getSession } from "@auth/solid-start";
import { GitHubService } from "@peepr/integration";
import { query } from "@solidjs/router";
import { getWebRequest } from "vinxi/http";
import { authOpts } from "~/config/auth";
import { Cache } from "~/lib/cache.ts";

export const repositoriesCacheKey = () => "repositories:user";
export const organizationRepositoriesCacheKey = (org: string) => `repositories:org:${org}`;
export const repositoryByNameCacheKey = (fullName: string) => `repository:${fullName}`;

/**
 * Server query to fetch repositories accessible to the current user
 */
export const getRepositories = query(async () => {
  "use server";

  return await Cache.getOrSet(repositoriesCacheKey(), async () => {
    const request = getWebRequest();
    const session = await getSession(request, authOpts);

    if (!session?.tokens?.github.accessToken) {
      throw new Error("No GitHub access token found. Please sign in again.");
    }

    const githubService = new GitHubService(session.tokens.github.accessToken);

    try {
      // Get repositories for the authenticated user
      const repositories = await githubService.getRepositories({
        type: "all",
        sort: "updated",
        direction: "desc",
        per_page: 100,
      });

      // Filter repositories where user has push access (can create PRs)
      return repositories.filter(repo =>
        repo.permissions?.push ||
        repo.permissions?.admin ||
        repo.permissions?.maintain
      );
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw new Error("Failed to fetch repositories from GitHub");
    }
  }, 300); // Cache for 5 minutes
}, "repositories");
