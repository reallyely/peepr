import assert from "node:assert";
import { test } from "node:test";
import { Cycle, type IntegrationEvent } from "@peepr/core";
import { GITHUB_TOKEN } from "../ports/github/config/github.ts";
import { GitHubService } from "../ports/github/github.service.ts";
import { IntegrationService } from "./IntegrationService.ts";

// Skip tests if no GitHub token is available
const maybeTest = GITHUB_TOKEN ? test : test.skip;

maybeTest("IntegrationService - streamIntegrationsForCycle", async () => {
  const githubService = new GitHubService(GITHUB_TOKEN);
  const integrationService = new IntegrationService(githubService);

  // Create a test cycle that's 14 days long ending today
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 14);

  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate,
    endDate,
  });

  // Collect the first 5 integrations to verify the stream works
  const integrations: IntegrationEvent[] = [];
  let count = 0;

  for await (const integration of integrationService.streamIntegrationsForCycle(cycle)) {
    integrations.push(integration);
    count++;

    // Just get a few for testing
    if (count >= 5) break;
  }

  // We should have some integrations (or none if the repo is inactive)
  assert.ok(integrations.length <= 5);

  // Each integration should be properly constructed
  for (const integration of integrations) {
    assert.ok(integration.prNumber > 0);
    assert.ok(integration.title.length > 0);
    assert.ok(integration.createdAt instanceof Date);
  }
});

maybeTest("IntegrationService - getStatisticsForCycle", async () => {
  const githubService = new GitHubService(GITHUB_TOKEN);
  const integrationService = new IntegrationService(githubService);

  // Create a test cycle for last month
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(startDate.getMonth() - 1);

  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate,
    endDate,
  });

  // Get the statistics for the cycle
  const statistics = await integrationService.getStatisticsForCycle(cycle);

  // Verify we have valid statistics
  assert.ok(Number.isInteger(statistics.totalPRs));
  assert.ok(Number.isInteger(statistics.totalCIRuns));

  // If we had any PRs, we should have valid duration statistics
  if (statistics.totalPRs > 0) {
    assert.ok(statistics.ciDuration.median.inMilliseconds >= 0);
    assert.ok(statistics.openTime.median.inMilliseconds >= 0);
  }
});
