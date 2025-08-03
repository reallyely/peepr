import type { Cycle, Duration } from "@peepr/core";
import type { CIRun } from "#src/model/CiRun.ts";
import type { CycleStatistics, PullRequest, Repository } from "#src/model/index.ts";

export interface IntegrationRepository {
  getRepositories(): Promise<Repository[]>
  getPullRequestsByCycle(cycle: Cycle): Promise<PullRequest[]>
}
