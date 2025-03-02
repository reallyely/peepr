import assert from "node:assert";
import { describe, it } from "node:test";
import { Duration } from "@peepr/core/model/domain/Duration.ts";
import { WorkItemIntegrationBuilder } from "./WorkItemIntegration.ts";

// Mock pull request data
const mockPullRequest = {
  id: 123,
  number: 5319,
  title: "Test PR",
  closed_at: null,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-02T00:00:00Z",
  merged_at: null
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

describe("WorkItemIntegrationBuilder", () => {
  it("builds a basic WorkItemIntegration from PR data", () => {
    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(mockPullRequest)
      .build();

    assert.strictEqual(integration.id, 123);
    assert.strictEqual(integration.prNumber, 5319);
    assert.strictEqual(integration.title, "Test PR");
    assert.strictEqual(integration.isInProgress(), true);
    assert.strictEqual(integration.isComplete(), false);
    assert.strictEqual(integration.isAbandoned(), false);
  });

  it("tracks Pull Request Checks workflow runs", () => {
    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(mockPullRequest)
      .setWorkflowRun(mockWorkflowRun)
      .setWorkflowRun({ ...mockWorkflowRun, id: 457 })
      .build();

    assert.strictEqual(integration.pullRequestCheckRuns, 2);
  });

  it("calculates total workflow duration", () => {
    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(mockPullRequest)
      .setWorkflowUsage(mockUsage)
      .setWorkflowUsage({ ...mockUsage })
      .build();

    assert.strictEqual(integration.totalDuration.inMilliseconds, 600000);
  });

  it("calculates PR open duration for closed PRs", () => {
    const closedPR = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z",
      merged_at: "2024-01-03T00:00:00Z"
    };

    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(closedPR)
      .build();

    // Should be 2 days (172800000 ms)
    assert.strictEqual(integration.prTimeOpen.inMilliseconds, 172800000);
    assert.strictEqual(integration.isComplete(), true);
  });

  it("calculates PR open duration for abandoned PRs", () => {
    const abandonedPR = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z"
    };

    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(abandonedPR)
      .build();

    assert.strictEqual(integration.prTimeOpen.inMilliseconds, 172800000);
    assert.strictEqual(integration.isAbandoned(), true);
  });

  it("throws error when missing required data", () => {
    assert.throws(() => {
      // @ts-expect-error - Testing invalid type
      new WorkItemIntegrationBuilder().setPullRequest({}).build();
    }, {
      message: "Cannot build WorkItemIntegration: missing pull request information"
    });
  });

  it("generates correct summary for in-progress PR", () => {
    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(mockPullRequest)
      .build();

    assert.ok(integration.getSummary().includes("has been open for"));
  });

  it("generates correct summary for merged PR", () => {
    const mergedPR = {
      ...mockPullRequest,
      closed_at: "2024-01-03T00:00:00Z",
      merged_at: "2024-01-03T00:00:00Z"
    };

    const integration = new WorkItemIntegrationBuilder()
      .setPullRequest(mergedPR)
      .setWorkflowRun(mockWorkflowRun)
      .build();

    assert.ok(integration.getSummary().includes("was merged after"));
    assert.ok(integration.getSummary().includes("with 1 check runs"));
  });
});
