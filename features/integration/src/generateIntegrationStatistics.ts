import { type IntegrationEvent, IntegrationStatistics, } from "#src/model/index.ts";

export function generateIntegrationStatistics(integrationEvents: IntegrationEvent[]): IntegrationStatistics {
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
};
