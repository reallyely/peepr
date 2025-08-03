import { Duration, Entity, type EntityConstructorParams, ID } from "@peepr/core";

interface PullRequestCreate {
  id?: string | number;
  prNumber: number | string;
  title: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  mergedAt?: Date | string | null;
  closedAt?: Date | string | null;
  timeOpen: Duration | string;
  checkRuns: number;
  totalDuration: Duration | string | number;
}

interface PullRequestData {
  id: number | string;
  prNumber: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  mergedAt: Date | null;
  closedAt: Date | null;
  timeOpen: Duration;
  checkRuns: number;
  totalDuration: Duration;
}

export class PullRequest extends Entity<PullRequestData> {

  static create(data: PullRequestCreate): PullRequest {
    try {
      // Validate required fields
      if (!data.prNumber || typeof data.prNumber !== "number") {
        throw new Error("PR number is required and must be a number");
      }

      if (!data.title || typeof data.title !== "string") {
        throw new Error("Title is required and must be a string");
      }

      // Convert date strings to Date objects if needed
      const createdAt = data.createdAt instanceof Date ? data.createdAt : new Date(data.createdAt);

      const updatedAt = data.updatedAt instanceof Date ? data.updatedAt : new Date(data.updatedAt);

      // Optional dates may be null
      const mergedAt = data.mergedAt ? (data.mergedAt instanceof Date ? data.mergedAt : new Date(data.mergedAt)) : null;

      const closedAt = data.closedAt ? (data.closedAt instanceof Date ? data.closedAt : new Date(data.closedAt)) : null;

      // Convert string durations to Duration objects if needed
      const prTimeOpen =
        data.timeOpen instanceof Duration
          ? data.timeOpen
          : new Duration(
            typeof data.timeOpen === "string" ? Duration.fromHumanReadable(data.timeOpen).inMilliseconds : 0,
          );

      const totalDuration =
        data.totalDuration instanceof Duration
          ? data.totalDuration
          : new Duration(
            typeof data.totalDuration === "string"
              ? Duration.fromHumanReadable(data.totalDuration).inMilliseconds
              : 0,
          );

      return new PullRequest({
        id: ID.create(data.id),
        data: {
          id: data.id,
          prNumber: data.prNumber,
          title: data.title,
          createdAt: createdAt,
          updatedAt: updatedAt,
          mergedAt: mergedAt,
          closedAt: closedAt,
          timeOpen: prTimeOpen,
          checkRuns: data.checkRuns,
          totalDuration: totalDuration,
        }
      });
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Checks if the work item integration is complete (merged)
   */
  isComplete(): boolean {
    return this.data.mergedAt !== null;
  }

  /**
   * Checks if the work item integration was abandoned (closed without merging)
   */
  isAbandoned(): boolean {
    return this.data.closedAt !== null && this.data.mergedAt === null;
  }

  /**
   * Checks if the work item integration is still in progress
   */
  isInProgress(): boolean {
    return this.data.closedAt === null && this.data.mergedAt === null;
  }

  /**
   * Returns a summary of the work item integration
   */
  getSummary(): string {
    if (this.isComplete()) {
      return `PR #${this.data.prNumber} "${this.data.title}" was merged after ${this.data.timeOpen.toHumanReadable()} with ${this.data.checkRuns} check runs.`;
    }
    if (this.isAbandoned()) {
      return `PR #${this.data.prNumber} "${this.data.title}" was closed without merging after ${this.data.timeOpen.toHumanReadable()}.`;
    }
    return `PR #${this.data.prNumber} "${this.data.title}" has been open for ${this.data.timeOpen.toHumanReadable()}.`;
  }

  public toJSON() {
    return JSON.stringify({
      id: this.id.toString(),
      prNumber: this.data.prNumber,
      title: this.data.title,
      createdAt: this.data.createdAt.toISOString(),
      updatedAt: this.data.updatedAt.toISOString(),
      mergedAt: this.data.mergedAt ? this.data.mergedAt.toISOString() : null,
      closedAt: this.data.closedAt ? this.data.closedAt.toISOString() : null,
      timeOpen: this.data.timeOpen.toHumanReadable(),
      checkRuns: this.data.checkRuns,
      totalDuration: this.data.totalDuration.toHumanReadable(),
    });
  }
}
