import assert from "node:assert";
import { test } from "node:test";
import { GITHUB_TOKEN } from "./config/github.ts";
import { GitHubService } from "./github.service.ts";

const githubService = new GitHubService(GITHUB_TOKEN, "rivial-data-security", "rivial-information-security-center");

test("GitHubService - getRepository", async () => {
  const response = await githubService.getRepository();
  assert.ok(response.data);
  assert.strictEqual(response.data.full_name, "rivial-data-security/rivial-information-security-center");
});

test("GitHubService - getPullRequests", async () => {
  const response = await githubService.getPullRequests("open");
  assert.ok(response.data);
  assert.ok(Array.isArray(response.data));
});

test("GitHubService - getCommits", async () => {
  const response = await githubService.getCommits();
  assert.ok(response.data);
  assert.ok(Array.isArray(response.data));
});

test("GitHubService - get workflow statistics for PR", async () => {
  const workflowRuns = await githubService.getAllWorkflowRunsForPR(5319);
  assert.ok(workflowRuns);
});

test("GitHubService - get workflow usage for PR", async () => {
  const workflowRuns = await githubService.getAllWorkflowRunsForPR(5319);
  const runMap = new Map();
  for await (const run of workflowRuns) {
    const workflowStats = await githubService.getWorkflowRunUsage(run.id);
    runMap.set(run.id, { name: run.name, workflowStats });
    assert.ok(workflowStats);
  }
});

test("GitHubService - get workflow jobs", async () => {
  const workflowRuns = await githubService.getAllWorkflowRunsForPR(5319);
  const jobs = await githubService.getWorkflowJobs(workflowRuns[0].id);
  assert.ok(workflowRuns);
  assert.ok(jobs);
});
