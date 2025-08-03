import { type Cycle, UseCase } from "@peepr/core";
import { CycleStatistics } from "#src/model/CycleStatistics.ts";
import type { IntegrationRepository } from "./requires/IntegrationRepository.ts";

export class GetCycleStats extends UseCase<Cycle, CycleStatistics> {
  private integrationRepository: IntegrationRepository;

  constructor({ integrationRepository }: { integrationRepository: IntegrationRepository }) {
    super();
    this.integrationRepository = integrationRepository;
  }

  async execute(cycle: Cycle): Promise<CycleStatistics> {
    const prs = await this.integrationRepository.getPullRequestsByCycle(cycle);

    const cycleStatistics = CycleStatistics.create(prs);

    return cycleStatistics;
  }
}
