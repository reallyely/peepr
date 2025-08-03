import { Octokit } from "@octokit/core";
import type { components } from "@octokit/openapi-types";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import type { Cycle } from "@peepr/core";
import type { PullRequest } from "#src/model/PullRequest.ts";
import { Repository } from "#src/model/Repository.ts";
import type { IntegrationRepository } from "#src/requires/IntegrationRepository.ts";
import { GithubPullRequestBuilder } from "./GithubPullRequestBuilder.ts";

// Create an extended Octokit with plugins
const MyOctokit = Octokit.plugin(restEndpointMethods, paginateRest);

/**
 * The GitHub service provides access to data from the GitHub API
 * This is not the appropriate place to perform mapping logic, it is purely for retrieval
 */
export class GitHubService implements IntegrationRepository {
  private octokit: InstanceType<typeof MyOctokit>;
  private owner?: string;
  private repo?: string;

  constructor(authToken: string, owner?: string, repo?: string) {
    this.octokit = new MyOctokit({
      auth: authToken,
    });
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * List repositories accessible to the current user
   */
  async getRepositories() {
    const { data } = await this.octokit.rest.repos.listForAuthenticatedUser({
      type: "all",
      sort: "updated",
      direction: "desc",
      per_page: 100,
    });

    // Filter repositories where user has push access (can create PRs)
    const repositories = data.filter(repo =>
      repo.permissions?.push ||
      repo.permissions?.admin ||
      repo.permissions?.maintain
    );

    return repositories.map(({ id, name, description, language, created_at, updated_at, owner }) =>
      Repository.create({
        id,
        name,
        description,
        language,
        createdDate: created_at,
        updatedDate: updated_at,
        owner: owner.name,
      }),
    );
  }

  async getPullRequestsByCycle(cycle: Cycle) {
    const targetOwner = this.owner;
    const targetRepo = this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided in constructor");
    }

    const results: PullRequest[] = [];

    const iterator = this.octokit.paginate.iterator(this.octokit.rest.search.issuesAndPullRequests, {
      q: `type:pr repo:${targetOwner}/${targetRepo} is:merged merged:${cycle.startDate.toISOString()}..${cycle.endDate.toISOString()}`,
      sort: "created",
      order: "desc",
      per_page: 100,
    });

    for await (const { data: prs } of iterator) {
      for await (const pr of prs) {
        const builder = new GithubPullRequestBuilder().setPullRequest(pr);
        const prCiRuns = await this.getAllWorkflowRunsForPR(pr.number);
        for await (const run of prCiRuns) {
          builder.setWorkflowRun(run);
          try {
            const usage = await this.getWorkflowRunUsage(run.id);
            builder.setWorkflowUsage(usage);
          } catch (error) {
            console.warn(`Failed to get workflow usage for run ${run.id}: ${error}`);
          }
        }

        results.push(builder.build());
      }
    }

    return results;
  }

  private async getPullRequestDetails(
    prNumber: number,
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.pulls.get>[0]> = {},
  ): Promise<components["schemas"]["pull-request"]> {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    const { data } = await this.octokit.rest.pulls.get({
      owner: targetOwner,
      repo: targetRepo,
      pull_number: prNumber,
      ...options,
    });
    return data;
  }

  private async getWorkflowRuns(
    branch: string,
    createdSince: string,
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.actions.listWorkflowRunsForRepo>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    const { data } = await this.octokit.rest.actions.listWorkflowRunsForRepo({
      owner: targetOwner,
      repo: targetRepo,
      branch,
      created: `>=${createdSince}`,
      ...options,
    });
    return data.workflow_runs;
  }

  private async getWorkflowRunUsage(

    runId: number,
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.actions.getWorkflowRunUsage>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    const { data } = await this.octokit.rest.actions.getWorkflowRunUsage({
      owner: targetOwner,
      repo: targetRepo,
      run_id: runId,
      ...options,
    });
    return data;
  }

  private async getAllWorkflowRunsForPR(
    prNumber: number,
    owner?: string,
    repo?: string,
    prOptions: Partial<Parameters<typeof this.octokit.rest.pulls.get>[0]> = {},
    workflowOptions: Partial<Parameters<typeof this.octokit.rest.actions.listWorkflowRunsForRepo>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    const pr = await this.getPullRequestDetails(prNumber, targetOwner, targetRepo, prOptions);

    return await this.getWorkflowRuns(pr.head.ref, pr.created_at, targetOwner, targetRepo, workflowOptions);
  }
}
