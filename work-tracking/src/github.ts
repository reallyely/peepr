
import { Octokit } from "@octokit/core";
import type { components } from "@octokit/openapi-types";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

// Create an extended Octokit with plugins
const MyOctokit = Octokit.plugin(
  restEndpointMethods,
  paginateRest
);

/**
 * The GitHub service provides access to data from the GitHub API
 * This is not the appropriate place to perform mapping logic, it is purely for retrieval
 */
export class GitHubService {
  private octokit: InstanceType<typeof MyOctokit>;
  private owner = "rivial-data-security";
  private repo = "rivial-information-security-center";

  constructor(authToken: string) {
    this.octokit = new MyOctokit({
      auth: authToken,
    });
  }

  async getRepository() {
    return await this.octokit.rest.repos.get({
      owner: this.owner,
      repo: this.repo,
    });
  }

  async getIssues(state: "open" | "closed" | "all" = "open") {
    return await this.octokit.rest.issues.listForRepo({
      owner: this.owner,
      repo: this.repo,
      state,
    });
  }

  async getPullRequests(state: "open" | "closed" | "all" = "open") {
    return await this.octokit.rest.pulls.list({
      owner: this.owner,
      repo: this.repo,
      state,
    });
  }

  async getBranches() {
    return await this.octokit.rest.repos.listBranches({
      owner: this.owner,
      repo: this.repo,
    });
  }

  async getCommits(branch = "main") {
    return await this.octokit.rest.repos.listCommits({
      owner: this.owner,
      repo: this.repo,
      sha: branch,
    });
  }

  async getPullRequestDetails(
    prNumber: number
  ): Promise<components["schemas"]["pull-request"]> {
    const { data } = await this.octokit.rest.pulls.get({
      owner: this.owner,
      repo: this.repo,
      pull_number: prNumber,
    });
    return data;
  }

  async getWorkflowRuns(branch: string, createdSince: string) {
    const { data } = await this.octokit.rest.actions.listWorkflowRunsForRepo({
      owner: this.owner,
      repo: this.repo,
      branch,
      created: `>=${createdSince}`,
    });
    return data.workflow_runs;
  }

  async getWorkflowRunUsage(runId: number) {
    const { data } = await this.octokit.rest.actions.getWorkflowRunUsage({
      owner: this.owner,
      repo: this.repo,
      run_id: runId,
    });
    return data;
  }

  async getWorkflowJobs(runId: number) {
    const { data } = await this.octokit.rest.actions.listJobsForWorkflowRun({
      owner: this.owner,
      repo: this.repo,
      run_id: runId,
    });
    return data;
  }

  async getAllWorkflowRunsForPR(prNumber: number) {
    const pr = await this.getPullRequestDetails(prNumber);

    return await this.getWorkflowRuns(pr.head.ref, pr.created_at);
  }

  async *getPullRequestsByDateRange(
    startDate: string,
    endDate: string = new Date().toISOString()
  ) {
    const iterator = this.octokit.paginate.iterator(
      this.octokit.rest.search.issuesAndPullRequests,
      {
        q: `type:pr repo:${this.owner}/${this.repo} is:merged merged:${startDate}..${endDate}`,
        sort: "created",
        order: "desc",
        per_page: 100,
      }
    );

    for await (const { data: items } of iterator) {
      yield* items;
    }
  }

}
