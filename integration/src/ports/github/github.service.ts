import { Octokit } from "@octokit/core";
import type { components } from "@octokit/openapi-types";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

// Create an extended Octokit with plugins
const MyOctokit = Octokit.plugin(restEndpointMethods, paginateRest);

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

  async getRepository(options: Partial<Parameters<typeof this.octokit.rest.repos.get>[0]> = {}) {
    return await this.octokit.rest.repos.get({
      owner: this.owner,
      repo: this.repo,
      ...options,
    });
  }

  async getIssues(
    state: "open" | "closed" | "all" = "open",
    options: Partial<Parameters<typeof this.octokit.rest.issues.listForRepo>[0]> = {},
  ) {
    return await this.octokit.rest.issues.listForRepo({
      owner: this.owner,
      repo: this.repo,
      state,
      ...options,
    });
  }

  async getPullRequests(
    state: "open" | "closed" | "all" = "open",
    options: Partial<Parameters<typeof this.octokit.rest.pulls.list>[0]> = {},
  ) {
    return await this.octokit.rest.pulls.list({
      owner: this.owner,
      repo: this.repo,
      state,
      ...options,
    });
  }

  async getBranches(options: Partial<Parameters<typeof this.octokit.rest.repos.listBranches>[0]> = {}) {
    return await this.octokit.rest.repos.listBranches({
      owner: this.owner,
      repo: this.repo,
      ...options,
    });
  }
  async getBranchesWithActivity(
    limit = 10,
    options: Partial<Parameters<typeof this.octokit.rest.repos.listBranches>[0]> = {},
    commitOptions: Partial<Parameters<typeof this.octokit.rest.repos.listCommits>[0]> = {},
  ) {
    // First get all branches
    const branches = await this.octokit.rest.repos.listBranches({
      owner: this.owner,
      repo: this.repo,
      ...options,
    });

    // Get activity data for each branch (use the latest commit as activity indicator)
    const branchesWithActivity = await Promise.all(
      branches.data.map(async (branch) => {
        const commits = await this.octokit.rest.repos.listCommits({
          owner: this.owner,
          repo: this.repo,
          sha: branch.name,
          per_page: 1,
          ...commitOptions,
        });

        return {
          ...branch,
          lastActivity: commits.data[0]?.commit.author?.date || null,
          lastCommitMessage: commits.data[0]?.commit.message || "",
          lastAuthor: commits.data[0]?.commit.author?.name || "",
        };
      }),
    );

    // Sort by most recent activity and limit to requested number
    return branchesWithActivity
      .sort((a, b) => {
        if (!a.lastActivity) return 1;
        if (!b.lastActivity) return -1;
        return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
      })
      .slice(0, limit);
  }

  async getCommits(branch = "main", options: Partial<Parameters<typeof this.octokit.rest.repos.listCommits>[0]> = {}) {
    return await this.octokit.rest.repos.listCommits({
      owner: this.owner,
      repo: this.repo,
      sha: branch,
      ...options,
    });
  }

  async getPullRequestDetails(
    prNumber: number,
    options: Partial<Parameters<typeof this.octokit.rest.pulls.get>[0]> = {},
  ): Promise<components["schemas"]["pull-request"]> {
    const { data } = await this.octokit.rest.pulls.get({
      owner: this.owner,
      repo: this.repo,
      pull_number: prNumber,
      ...options,
    });
    return data;
  }

  async getWorkflowRuns(
    branch: string,
    createdSince: string,
    options: Partial<Parameters<typeof this.octokit.rest.actions.listWorkflowRunsForRepo>[0]> = {},
  ) {
    const { data } = await this.octokit.rest.actions.listWorkflowRunsForRepo({
      owner: this.owner,
      repo: this.repo,
      branch,
      created: `>=${createdSince}`,
      ...options,
    });
    return data.workflow_runs;
  }

  async getWorkflowRunUsage(
    runId: number,
    options: Partial<Parameters<typeof this.octokit.rest.actions.getWorkflowRunUsage>[0]> = {},
  ) {
    const { data } = await this.octokit.rest.actions.getWorkflowRunUsage({
      owner: this.owner,
      repo: this.repo,
      run_id: runId,
      ...options,
    });
    return data;
  }

  async getWorkflowJobs(
    runId: number,
    options: Partial<Parameters<typeof this.octokit.rest.actions.listJobsForWorkflowRun>[0]> = {},
  ) {
    const { data } = await this.octokit.rest.actions.listJobsForWorkflowRun({
      owner: this.owner,
      repo: this.repo,
      run_id: runId,
      ...options,
    });
    return data;
  }

  async getAllWorkflowRunsForPR(
    prNumber: number,
    prOptions: Partial<Parameters<typeof this.octokit.rest.pulls.get>[0]> = {},
    workflowOptions: Partial<Parameters<typeof this.octokit.rest.actions.listWorkflowRunsForRepo>[0]> = {},
  ) {
    const pr = await this.getPullRequestDetails(prNumber, prOptions);

    return await this.getWorkflowRuns(pr.head.ref, pr.created_at, workflowOptions);
  }

  async *getPullRequestsByDateRange(
    startDate: string,
    endDate: string = new Date().toISOString(),
    options: Partial<Parameters<typeof this.octokit.rest.search.issuesAndPullRequests>[0]> = {},
  ) {
    const iterator = this.octokit.paginate.iterator(this.octokit.rest.search.issuesAndPullRequests, {
      q: `type:pr repo:${this.owner}/${this.repo} is:merged merged:${startDate}..${endDate}`,
      sort: "created",
      order: "desc",
      per_page: 100,
      ...options,
    });

    for await (const { data: items } of iterator) {
      yield* items;
    }
  }
}
