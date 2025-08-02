import { StatisticalDistribution } from "@peepr/core";

/**
 * Represents statistics about integration events, typically for a cycle
 */
export class PullRequestStatistics {
  readonly totalPRs: number;
  readonly totalCIRuns: number;
  readonly meanCIRuns: number;
  readonly ciDuration: StatisticalDistribution;
  readonly openTime: StatisticalDistribution;

  private constructor(
    totalPRs: number,
    totalCIRuns: number,
    ciDuration: StatisticalDistribution,
    openTime: StatisticalDistribution,
  ) {
    this.totalPRs = totalPRs;
    this.totalCIRuns = totalCIRuns;
    this.meanCIRuns = totalCIRuns / totalPRs;
    this.ciDuration = ciDuration;
    this.openTime = openTime;
  }

  /**
   * Creates an IntegrationStatistics instance from the provided data
   */
  static create(data: {
    totalPRs: number;
    totalCIRuns: number;
    ciDuration: StatisticalDistribution;
    openTime: StatisticalDistribution;
  }): PullRequestStatistics {
    return new PullRequestStatistics(data.totalPRs, data.totalCIRuns, data.ciDuration, data.openTime);
  }

  /**
   * Creates an empty statistics object with zero values
   */
  static empty(): PullRequestStatistics {
    return new PullRequestStatistics(0, 0, StatisticalDistribution.empty(), StatisticalDistribution.empty());
  }

  toJSON() {
    return {
      totalPRs: this.totalPRs,
      totalCIRuns: this.totalCIRuns,
      ciDuration: this.ciDuration.toJSON(),
      openTime: this.openTime.toJSON(),
    };
  }
}
