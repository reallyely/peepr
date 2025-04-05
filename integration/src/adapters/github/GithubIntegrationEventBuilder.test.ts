import assert from "node:assert";
import { describe, it } from "node:test";
import { GithubIntegrationEventBuilder } from "./GithubIntegrationEventBuilder.ts";

// Mock pull request data
type PullRequestParameter = Parameters<InstanceType<typeof GithubIntegrationEventBuilder>["setPullRequest"]>[0]
const mockPullRequest: PullRequestParameter = {
  id: 123,
  number: 5319,
  title: "Test PR",
  closed_at: null,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-02T00:00:00Z",
  pull_request: {
    merged_at: null,
    diff_url: "",
    html_url: "",
    patch_url: "",
    url: ""
  }
};

// Mock workflow run data
const mockWorkflowRun = {
  id: 456,
  workflow_id: 789,
  name: "Pull Request Checks",
  conclusion: "success",
  run_started_at: "2024-01-01T00:00:00Z",
};

// Mock workflow usage data
const mockUsage = {
  run_duration_ms: 300000,
};

describe("GithubIntegrationEventBuilder", () => {
  it("builds a basic IntegrationEvent from PR data", () => {
    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(mockPullRequest)
      .build();

    assert.strictEqual(integration.id.toString(), "123");
    assert.strictEqual(integration.prNumber, 5319);
    assert.strictEqual(integration.title, "Test PR");
    assert.strictEqual(integration.isInProgress(), true);
    assert.strictEqual(integration.isComplete(), false);
    assert.strictEqual(integration.isAbandoned(), false);
  });

  it("tracks Pull Request Checks workflow runs", () => {
    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(mockPullRequest)
      .setWorkflowRun(mockWorkflowRun)
      .setWorkflowRun({ ...mockWorkflowRun, id: 457 })
      .build();

    assert.strictEqual(integration.checkRuns, 2);
  });

  it("calculates total workflow duration", () => {
    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(mockPullRequest)
      .setWorkflowUsage(mockUsage)
      .setWorkflowUsage({ ...mockUsage })
      .build();

    assert.strictEqual(integration.totalDuration.inMilliseconds, 600000);
  });

  it("calculates PR open duration for closed PRs", () => {
    const closedPR: PullRequestParameter = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z",
      pull_request: {
        merged_at: "2024-01-03T00:00:00Z",
        diff_url: "",
        html_url: "",
        patch_url: "",
        url: ""
      }
    };

    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(closedPR)
      .build();

    // Should be 2 days (172800000 ms)
    assert.strictEqual(integration.timeOpen.inMilliseconds, 172800000);
    assert.strictEqual(integration.isComplete(), true);
  });

  it("calculates PR open duration for abandoned PRs", () => {
    const abandonedPR = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z"
    };

    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(abandonedPR)
      .build();

    assert.strictEqual(integration.timeOpen.inMilliseconds, 172800000);
    assert.strictEqual(integration.isAbandoned(), true);
  });

  it("throws error when missing required data", () => {
    assert.throws(() => {
      // @ts-expect-error - Testing invalid type
      new GithubIntegrationEventBuilder().setPullRequest({}).build();
    }, {
      message: "Cannot build IntegrationEvent: missing pull request information"
    });
  });

  it("generates correct summary for in-progress PR", () => {
    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(mockPullRequest)
      .build();

    assert.ok(integration.getSummary().includes("has been open for"));
  });

  it("generates correct summary for merged PR", () => {
    const mergedPR = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z",
      pull_request: {
        merged_at: "2024-01-03T00:00:00Z",
        diff_url: "",
        html_url: "",
        patch_url: "",
        url: ""
      }
    };

    const integration = new GithubIntegrationEventBuilder()
      .setPullRequest(mergedPR)
      .setWorkflowRun(mockWorkflowRun)
      .build();

    assert.ok(integration.getSummary().includes("was merged after"));
    assert.ok(integration.getSummary().includes("with 1 check runs"));
  });
});
