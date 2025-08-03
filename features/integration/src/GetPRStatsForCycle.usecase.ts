import { type Cycle, UseCase } from "@peepr/core";
import type { PullRequest } from "#src/model/PullRequest.ts";
import type { IntegrationRepository } from "./requires/IntegrationRepository.ts";

export class GetPullRequestsForCycle extends UseCase<Cycle, PullRequest[]> {
  private integrationRepository: IntegrationRepository;

  constructor({ integrationRepository }: { integrationRepository: IntegrationRepository }) {
    super();
    this.integrationRepository = integrationRepository;
  }
  async execute(cycle: Cycle): Promise<PullRequest[]> {
    const prs = await this.integrationRepository.getPullRequestsByCycle(cycle);

    return prs
  }
}
