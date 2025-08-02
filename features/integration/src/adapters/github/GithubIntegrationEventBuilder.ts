import type { components } from "@octokit/openapi-types";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import { Duration } from "@peepr/core";
import { differenceInMilliseconds } from "date-fns";
import { IntegrationEvent } from "#src/model/IntegrationEvent.ts"

/**
 * WorkItemIntegrationBuilder takes GitHub API data and builds a WorkItemIntegration object
 * that represents a pull request's statistics and metadata
 */
export class GithubIntegrationEventBuilder {
  private prId = 0;
  private prNumber = 0;
  private prTitle = "";
  private prCreatedAt: Date = new Date();
  private prUpdatedAt: Date = new Date();
  private prMergedAt: Date | null = null;
  private prClosedAt: Date | null = null;
  private prTimeOpen: Duration = new Duration(0);
  private totalDuration: Duration = new Duration(0);
  private pullRequestCheckRuns = 0;

  // Sets the pull request basic data
  setPullRequest(
    pullRequest: Pick<
      RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["response"]["data"]["items"][number],
      "closed_at" | "created_at" | "id" | "number" | "title" | "updated_at" | "pull_request"
    >,
  ): GithubIntegrationEventBuilder {
    this.prId = pullRequest.id;
    this.prNumber = pullRequest.number;
    this.prTitle = pullRequest.title;
    this.prCreatedAt = new Date(pullRequest.created_at);
    this.prUpdatedAt = new Date(pullRequest.updated_at || pullRequest.created_at);

    if (pullRequest.closed_at) {
      this.prClosedAt = new Date(pullRequest.closed_at);

      // Calculate duration the PR was open
      const durationMs = differenceInMilliseconds(this.prClosedAt, this.prCreatedAt);
      this.prTimeOpen = new Duration(durationMs);
    }

    if (pullRequest?.pull_request?.merged_at) {
      this.prMergedAt = new Date(pullRequest.pull_request.merged_at);
    }

    return this;
  }

  // Tracks workflow runs for Pull Request Checks
  setWorkflowRun(
    workflowRun: Pick<
      components["schemas"]["workflow-run"],
      "name" | "id" | "run_started_at" | "conclusion" | "workflow_id"
    >,
  ): GithubIntegrationEventBuilder {
    if (workflowRun.name === "Pull Request Checks") {
      this.pullRequestCheckRuns++;
    }
    return this;
  }

  // Adds workflow usage data to calculate total duration
  setWorkflowUsage(usage: Partial<components["schemas"]["workflow-run-usage"]>): GithubIntegrationEventBuilder {
    if (usage.run_duration_ms) {
      this.totalDuration = new Duration(usage.run_duration_ms).add(this.totalDuration);
    }
    return this;
  }

  // If PR is still open, calculate the current open duration
  calculateCurrentOpenDuration(): void {
    if (!this.prClosedAt) {
      const durationMs = differenceInMilliseconds(new Date(), this.prCreatedAt);
      this.prTimeOpen = new Duration(durationMs);
    }
  }

  // Builds the final WorkItemIntegration object
  build(): IntegrationEvent {
    // Calculate current open duration if PR is still open
    this.calculateCurrentOpenDuration();

    // Validate required fields
    if (!this.prNumber || !this.prTitle) {
      throw new Error("Cannot build IntegrationEvent: missing pull request information");
    }

    return IntegrationEvent.create({
      id: this.prId,
      prNumber: this.prNumber,
      title: this.prTitle,
      createdAt: this.prCreatedAt,
      updatedAt: this.prUpdatedAt,
      mergedAt: this.prMergedAt,
      closedAt: this.prClosedAt,
      timeOpen: this.prTimeOpen,
      checkRuns: this.pullRequestCheckRuns,
      totalDuration: this.totalDuration,
    });
  }
}
