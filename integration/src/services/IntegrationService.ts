import {
  type Cycle,
  type Duration,
  type IntegrationEvent,
  IntegrationStatistics,
  StatisticsService,
} from "@peepr/core";
import { GithubIntegrationEventBuilder } from "../adapters/github/GithubIntegrationEventBuilder.ts";
import type { GitHubService } from "../ports/github/github.service.ts";

/**
 * Service for retrieving and processing integration events related to cycles
 * Uses streaming for memory efficiency and better performance
 */
export class IntegrationService {
  private readonly githubService: GitHubService

  constructor(
    githubService: GitHubService,
  ) {
    this.githubService = githubService
  }
  /**
   * Streams integration events for a given cycle
   * @param cycle The cycle to retrieve integration events for
   */
  async *streamIntegrationsForCycle(
    cycle: Cycle,
  ): AsyncGenerator<IntegrationEvent> {
    const startDateISO = cycle.startDate.toISOString();
    const endDateISO = cycle.endDate.toISOString();

    // Stream pull requests from GitHub using their date range
    for await (const pr of this.githubService.getPullRequestsByDateRange(
      startDateISO,
      endDateISO,
    )) {
      try {
        // Start building the integration event
        const builder = new GithubIntegrationEventBuilder().setPullRequest(pr);

        // Get workflow runs with controlled concurrency
        const workflowRuns = await this.githubService.getAllWorkflowRunsForPR(
          pr.number,
        );

        // Process up to 5 workflow runs at a time to balance speed vs. rate limits
        const runBatches = this.batchArray(workflowRuns, 5);

        for (const batch of runBatches) {
          await Promise.all(
            batch.map(async (run) => {
              builder.setWorkflowRun(run);
              try {
                const usage = await this.githubService.getWorkflowRunUsage(
                  run.id,
                );
                builder.setWorkflowUsage(usage);
              } catch (error) {
                console.warn(
                  `Failed to get workflow usage for run ${run.id}: ${error}`,
                );
              }
            }),
          );
        }

        // Yield each integration as it's processed
        yield builder.build();
      } catch (error) {
        console.error(`Error processing PR #${pr.number}: ${error}`);
        // Continue processing other PRs even if one fails
      }
    }
  }

  /**
   * Calculates statistics for a cycle using streaming to minimize memory usage
   * @param cycle The cycle to calculate statistics for
   */
  async getStatisticsForCycle(cycle: Cycle): Promise<IntegrationStatistics> {
    // Create a streaming calculator that processes events incrementally
    const calculator = new StreamingStatisticsCalculator();

    for await (const integration of this.streamIntegrationsForCycle(cycle)) {
      calculator.addIntegration(integration);
    }

    return calculator.getResults();
  }

  /**
   * Helper method to split an array into batches for controlled concurrency
   */
  private batchArray<T>(array: T[], batchSize: number): T[][] {
    const batches: T[][] = [];

    for (let i = 0; i < array.length; i += batchSize) {
      batches.push(array.slice(i, i + batchSize));
    }

    return batches;
  }
}

/**
 * Helper class that calculates statistics incrementally without storing all events
 */
class StreamingStatisticsCalculator {
  private totalPRs = 0;
  private totalCIRuns = 0;
  private ciDurations: Duration[] = [];
  private openTimes: Duration[] = [];

  /**
   * Processes a single integration event and updates statistics
   */
  addIntegration(integration: IntegrationEvent): void {
    this.totalPRs++;
    this.totalCIRuns += integration.checkRuns;

    // Store only essential data for statistical calculations
    this.ciDurations.push(integration.totalDuration);
    this.openTimes.push(integration.timeOpen);
  }

  /**
   * Returns the final statistics after processing all events
   */
  getResults(): IntegrationStatistics {
    // Use the existing StatisticsService to calculate distributions
    return IntegrationStatistics.create({
      totalPRs: this.totalPRs,
      totalCIRuns: this.totalCIRuns,
      ciDuration: StatisticsService.calculateStatisticalDistribution(
        this.ciDurations,
      ),
      openTime: StatisticsService.calculateStatisticalDistribution(
        this.openTimes,
      ),
    });
  }
}
