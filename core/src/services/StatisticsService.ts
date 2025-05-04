import { Duration } from "../model/Duration.ts";
import type { IntegrationEvent } from "../model/IntegrationEvent.ts";
import { IntegrationStatistics } from "../model/statistics/IntegrationStatistics.ts";
import { StatisticalDistribution } from "../model/statistics/StatisticalDistribution.ts";

/**
 * Functions for generating statistics from integration events
 */
export const StatisticsService = {
  /**
   * Calculates statistics for a collection of integration events
   */
  generateStatistics(integrationEvents: IntegrationEvent[]): IntegrationStatistics {
    if (!integrationEvents.length) {
      return IntegrationStatistics.empty();
    }

    // Calculate total PRs and CI runs
    const totalPRs = integrationEvents.length;
    const totalCIRuns = integrationEvents.reduce((total, event) => total + event.checkRuns, 0);

    // Extract durations
    const ciDurations = integrationEvents.map((event) => event.totalDuration);
    const openTimes = integrationEvents.map((event) => event.timeOpen);

    // Calculate statistical distributions
    const ciDurationStats = this.calculateStatisticalDistribution(ciDurations);
    const openTimeStats = this.calculateStatisticalDistribution(openTimes);

    return IntegrationStatistics.create({
      totalPRs,
      totalCIRuns,
      ciDuration: ciDurationStats,
      openTime: openTimeStats,
    });
  },

  /**
   * Calculates statistical distribution for a collection of durations
   */
  calculateStatisticalDistribution(durations: Duration[]): StatisticalDistribution {
    if (!durations.length) {
      return StatisticalDistribution.empty();
    }

    // Sort durations by milliseconds
    const sortedDurations = [...durations].sort((a, b) => a.inMilliseconds - b.inMilliseconds);

    // Calculate mean
    const totalMs = sortedDurations.reduce((sum, d) => sum + d.inMilliseconds, 0);
    const meanMs = totalMs / sortedDurations.length;

    // Get index values for quartiles
    const middleIndex = Math.floor(sortedDurations.length / 2);
    const lowerIndex = Math.floor(sortedDurations.length / 4);
    const upperIndex = Math.floor((sortedDurations.length * 3) / 4);

    // Get actual quartile values
    const min = sortedDurations[0];
    const q1 = sortedDurations[lowerIndex];
    const median =
      sortedDurations.length % 2 === 0
        ? new Duration(
            (sortedDurations[middleIndex - 1].inMilliseconds + sortedDurations[middleIndex].inMilliseconds) / 2,
          )
        : sortedDurations[middleIndex];
    const q3 = sortedDurations[upperIndex];
    const max = sortedDurations[sortedDurations.length - 1];

    return StatisticalDistribution.create({
      median,
      mean: new Duration(meanMs),
      range: {
        min,
        max,
      },
      quartiles: {
        q1,
        q2: median,
        q3,
      },
    });
  },
};
