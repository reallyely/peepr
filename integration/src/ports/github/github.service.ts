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
   * Set the repository context for subsequent operations
   */
  setRepository(owner: string, repo: string): void {
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * Get the current authenticated user
   */
  async getCurrentUser() {
    const { data } = await this.octokit.rest.users.getAuthenticated();
    return data;
  }

  /**
   * List repositories accessible to the current user
   */
  async getRepositories(
    options: {
      type?: "all" | "owner" | "public" | "private" | "member";
      sort?: "created" | "updated" | "pushed" | "full_name";
      direction?: "asc" | "desc";
      per_page?: number;
      page?: number;
    } = {},
  ) {
    const { data } = await this.octokit.rest.repos.listForAuthenticatedUser({
      type: "all",
      sort: "updated",
      direction: "desc",
      per_page: 100,
      ...options,
    });
    return data
  }

  /**
   * List repositories for a specific organization
   */
  async getOrganizationRepositories(
    org: string,
    options: {
      type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      sort?: "created" | "updated" | "pushed" | "full_name";
      direction?: "asc" | "desc";
      per_page?: number;
      page?: number;
    } = {},
  ) {
    const { data } = await this.octokit.rest.repos.listForOrg({
      org,
      type: "all",
      sort: "updated",
      direction: "desc",
      per_page: 100,
      ...options,
    });
    return data
  }

  /**
   * Get repository details by owner and repo name
   */
  async getRepository(
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.repos.get>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    return await this.octokit.rest.repos.get({
      owner: targetOwner,
      repo: targetRepo,
      ...options,
    });
  }

  async getIssues(
    state: "open" | "closed" | "all" = "open",
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.issues.listForRepo>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    return await this.octokit.rest.issues.listForRepo({
      owner: targetOwner,
      repo: targetRepo,
      state,
      ...options,
    });
  }

  async getPullRequests(
    state: "open" | "closed" | "all" = "open",
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.pulls.list>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    return await this.octokit.rest.pulls.list({
      owner: targetOwner,
      repo: targetRepo,
      state,
      ...options,
    });
  }

  async getBranches(
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.repos.listBranches>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    return await this.octokit.rest.repos.listBranches({
      owner: targetOwner,
      repo: targetRepo,
      ...options,
    });
  }

  async getBranchesWithActivity(
    limit = 10,
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.repos.listBranches>[0]> = {},
    commitOptions: Partial<Parameters<typeof this.octokit.rest.repos.listCommits>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    // First get all branches
    const branches = await this.octokit.rest.repos.listBranches({
      owner: targetOwner,
      repo: targetRepo,
      ...options,
    });

    // Get activity data for each branch (use the latest commit as activity indicator)
    const branchesWithActivity = await Promise.all(
      branches.data.map(async (branch) => {
        const commits = await this.octokit.rest.repos.listCommits({
          owner: targetOwner,
          repo: targetRepo,
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

  async getCommits(
    branch = "main",
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.repos.listCommits>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    return await this.octokit.rest.repos.listCommits({
      owner: targetOwner,
      repo: targetRepo,
      sha: branch,
      ...options,
    });
  }

  async getPullRequestDetails(
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

  async getWorkflowRuns(
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

  async getWorkflowRunUsage(
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

  async getWorkflowJobs(
    runId: number,
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.actions.listJobsForWorkflowRun>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    const { data } = await this.octokit.rest.actions.listJobsForWorkflowRun({
      owner: targetOwner,
      repo: targetRepo,
      run_id: runId,
      ...options,
    });
    return data;
  }

  async getAllWorkflowRunsForPR(
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

  async *getPullRequestsByDateRange(
    startDate: string,
    endDate: string = new Date().toISOString(),
    owner?: string,
    repo?: string,
    options: Partial<Parameters<typeof this.octokit.rest.search.issuesAndPullRequests>[0]> = {},
  ) {
    const targetOwner = owner || this.owner;
    const targetRepo = repo || this.repo;

    if (!targetOwner || !targetRepo) {
      throw new Error("Repository owner and name must be provided either in constructor or method parameters");
    }

    const iterator = this.octokit.paginate.iterator(this.octokit.rest.search.issuesAndPullRequests, {
      q: `type:pr repo:${targetOwner}/${targetRepo} is:merged merged:${startDate}..${endDate}`,
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
