import assert from "node:assert";
import process from "node:process";
import { Cycle } from "@peepr/core";
import { GitHubService, IntegrationService } from "@peepr/integration";
import { query } from "@solidjs/router";
import { Cache } from "~/lib/cache";

export const cacheKey = (cycleNumber: number) => `integration:prStats:cycle:${cycleNumber}`;
/**
 * Server query to fetch PR statistics for a given cycle
 */
export const getCycleStatistics = query(async ({ cycleNumber }) => {
  "use server";

  return await Cache.getOrSet(cacheKey(cycleNumber), async () => {
    // This function will only execute if cache miss or refresh=true
    assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN is not set");
    const githubService = new GitHubService(process.env.GITHUB_TOKEN);
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
    const statistics = await integrationService.getStatisticsForCycle(cycle, integrationEvents);

    return {
      integrationEvents: integrationEvents.map((integration) => integration.toJSON()),
      statistics: statistics.toJSON(),
    };
  });
}, "integration-stats");
