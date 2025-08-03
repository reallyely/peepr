import { UseCase } from "@peepr/core";
import type { Repository } from "#src/model/Repository.ts";
import type { IntegrationRepository } from "./requires/IntegrationRepository.ts";

export class GetRepositories extends UseCase<void, Repository[]> {
  private integrationRepository: IntegrationRepository;

  constructor({ integrationRepository }: { integrationRepository: IntegrationRepository }) {
    super();
    this.integrationRepository = integrationRepository;
  }

  async execute(): Promise<Repository[]> {
    const repositories = await this.integrationRepository.getRepositories();

    return repositories;
  }
}
