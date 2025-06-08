
import { getSession } from "@auth/solid-start";
import { Cycle } from "@peepr/core";
import { GitHubService, IntegrationService } from "@peepr/integration";
import { query } from "@solidjs/router";
import { getWebRequest } from "vinxi/http";
import { authOpts } from "~/config/auth";
import { Cache } from "~/lib/cache.ts";

export const cacheKey = (cycleNumber: number, repoFullName: string) => `integration:prStats:cycle:${cycleNumber}:repo:${repoFullName}`;
/**
 * Server query to fetch PR statistics for a given cycle and repository
 */
export const getCycleStatistics = query(async ({ cycleNumber, repoFullName }) => {
  "use server";

  if (!repoFullName) {
    throw new Error("Repository name is required");
  }

  if (!repoFullName.includes('/')) {
    throw new Error("Invalid repository name. Expected format: owner/repo");
  }

  const [owner, repo] = repoFullName.split('/');

  return await Cache.getOrSet(cacheKey(cycleNumber, repoFullName), async () => {
    // This function will only execute if cache miss or refresh=true
    const request = getWebRequest();
    const session = await getSession(request, authOpts);

    if (!session?.tokens?.github.accessToken) {
      throw new Error("No GitHub access token found. Please sign in again.");
    }

    const githubService = new GitHubService(session?.tokens?.github.accessToken, owner, repo);
    const integrationService = new IntegrationService(githubService);

    if (!cycleNumber) {
      throw new Error("Cycle number is required");
    }

    // Create a Cycle domain object for the selected cycle using the static method
    const cycle = Cycle.fromCycleNumber(cycleNumber);

    const integrationEvents = [];
    for await (const integration of integrationService.streamIntegrationsForCycle(cycle)) {
      integrationEvents.push(integration);
    }
    const statistics = await integrationService.getStatisticsForCycle(integrationEvents);

    return {
      integrationEvents: integrationEvents.map((integration) => integration.toJSON()),
      statistics: statistics.toJSON(),
    };
  });
}, "integration-stats");
