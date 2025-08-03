import { type Duration, StatisticalDistribution, ValueObject } from "@peepr/core";
import type { PullRequest } from "./PullRequest.ts";

interface CycleStatisticsData {
  totalPRs: number;
  totalCIRuns: number;
  ciDurations: Duration[];
  ciDuration: StatisticalDistribution;
  openDurations: Duration[];
  openDuration: StatisticalDistribution;
  prs: PullRequest[];
}

/**
 * Represents statistics about PRs in a cycle
 */
export class CycleStatistics extends ValueObject<CycleStatisticsData> {
  private constructor(data: CycleStatisticsData) {
    super(data);
  }

  static create(prs: PullRequest[]): CycleStatistics {
    const totalPRs = prs.length;
    const totalCIRuns = prs.reduce((sum, pr) => sum + pr.data.checkRuns, 0);

    const ciDurations = prs.map(pr => pr.data.totalDuration);
    const openDurations = prs.map(pr => pr.data.timeOpen);

    const ciDuration = StatisticalDistribution.fromDurations(ciDurations);
    const openDuration = StatisticalDistribution.fromDurations(openDurations);

    return new CycleStatistics({
      totalPRs,
      totalCIRuns,
      ciDurations,
      ciDuration,
      openDurations,
      openDuration,
      prs,
    });
  }

  /**
   * Creates an empty statistics object with zero values
   */
  static empty(): CycleStatistics {
    return new CycleStatistics({
      totalPRs: 0,
      totalCIRuns: 0,
      ciDuration: StatisticalDistribution.empty(),
      ciDurations: [],
      openDuration: StatisticalDistribution.empty(),
      openDurations: [],
      prs: [],
    });
  }

  get prs(): PullRequest[] {
    return this.getValue().prs;
  }

  get totalPRs(): number {
    return this.getValue().totalPRs;
  }

  get totalCIRuns(): number {
    return this.getValue().totalCIRuns;
  }

  get meanCIRuns(): number {
    return this.getValue().totalCIRuns / this.getValue().totalPRs;
  }

  get ciDuration(): StatisticalDistribution {
    return this.getValue().ciDuration;
  }

  get openTime(): StatisticalDistribution {
    return this.getValue().openDuration;
  }

  /**
   * Processes a single integration event and updates statistics
   */
  public addPr(integration: PullRequest): void {
    this.value.totalPRs++;
    this.value.totalCIRuns += integration.data.checkRuns;

    // Store only essential data for statistical calculations
    this.value.ciDurations.push(integration.data.totalDuration);
    this.value.openDurations.push(integration.data.timeOpen);
  }
  toJSON() {
    const data = this.getValue();
    return {
      totalPRs: data.totalPRs,
      totalCIRuns: data.totalCIRuns,
      ciDuration: data.ciDuration.toJSON(),
      openTime: data.openDuration.toJSON(),
    };
  }
}
