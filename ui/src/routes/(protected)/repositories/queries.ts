import { getSession } from "@auth/solid-start";
import { GitHubService, } from "@peepr/integration";
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

/**
 * Server query to fetch organization repositories
 */
export const getOrganizationRepositories = query(async (org: string) => {
  "use server";

  if (!org) {
    throw new Error("Organization name is required");
  }

  return await Cache.getOrSet(organizationRepositoriesCacheKey(org), async () => {
    const request = getWebRequest();
    const session = await getSession(request, authOpts);

    if (!session.tokens.github.accessToken) {
      throw new Error("No GitHub access token found. Please sign in again.");
    }

    const githubService = new GitHubService(session.tokens.github.accessToken);

    try {
      const repositories = await githubService.getOrganizationRepositories(org, {
        type: "all",
        sort: "updated",
        direction: "desc",
        per_page: 100,
      });

      // Filter repositories where user has push access
      return repositories.filter(repo =>
        repo.permissions?.push ||
        repo.permissions?.admin ||
        repo.permissions?.maintain
      );
    } catch (error) {
      console.error(`Error fetching repositories for org ${org}:`, error);
      throw new Error(`Failed to fetch repositories for organization: ${org}`);
    }
  }, 300); // Cache for 5 minutes
}, "organization-repositories");

/**
 * Get repository details by full name (owner/repo)
 */
export const getRepositoryByName = query(async (fullName: string) => {
  "use server";

  if (!fullName || !fullName.includes('/')) {
    throw new Error("Invalid repository name. Expected format: owner/repo");
  }

  return await Cache.getOrSet(repositoryByNameCacheKey(fullName), async () => {
    const request = getWebRequest();
    const session = await getSession(request, authOpts);

    if (!session.tokens.github.accessToken) {
      throw new Error("No GitHub access token found. Please sign in again.");
    }

    const [owner, repo] = fullName.split('/');
    const githubService = new GitHubService(session.tokens.github.accessToken);

    try {
      const response = await githubService.getRepository(owner, repo);
      return response.data;
    } catch (error) {
      console.error(`Error fetching repository ${fullName}:`, error);
      return null;
    }
  }, 600); // Cache for 10 minutes (repository details change less frequently)
}, "repository-by-name");
