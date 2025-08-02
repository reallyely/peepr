import { Duration, ID } from "@peepr/core";

export class IntegrationEvent {
  readonly id: ID;
  readonly prNumber: number;
  readonly title: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly mergedAt: Date | null;
  readonly closedAt: Date | null;
  readonly timeOpen: Duration;
  readonly checkRuns: number;
  readonly totalDuration: Duration;

  private constructor(
    id: ID,
    prNumber: number,
    title: string,
    createdAt: Date,
    updatedAt: Date,
    mergedAt: Date | null,
    closedAt: Date | null,
    timeOpen: Duration,
    checkRuns: number,
    totalDuration: Duration,
  ) {
    this.id = id;
    this.prNumber = prNumber;
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.mergedAt = mergedAt;
    this.closedAt = closedAt;
    this.timeOpen = timeOpen;
    this.checkRuns = checkRuns;
    this.totalDuration = totalDuration;
  }

  static create(data: {
    id?: string | number;
    prNumber: number;
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    mergedAt?: string | Date | null;
    closedAt?: string | Date | null;
    timeOpen: Duration | string;
    checkRuns: number;
    totalDuration: Duration | string;
  }): IntegrationEvent {
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

      return new IntegrationEvent(
        ID.create(data.id),
        data.prNumber,
        data.title,
        createdAt,
        updatedAt,
        mergedAt,
        closedAt,
        prTimeOpen,
        data.checkRuns,
        totalDuration,
      );
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Checks if the work item integration is complete (merged)
   */
  isComplete(): boolean {
    return this.mergedAt !== null;
  }

  /**
   * Checks if the work item integration was abandoned (closed without merging)
   */
  isAbandoned(): boolean {
    return this.closedAt !== null && this.mergedAt === null;
  }

  /**
   * Checks if the work item integration is still in progress
   */
  isInProgress(): boolean {
    return this.closedAt === null && this.mergedAt === null;
  }

  /**
   * Returns a summary of the work item integration
   */
  getSummary(): string {
    if (this.isComplete()) {
      return `PR #${this.prNumber} "${this.title}" was merged after ${this.timeOpen.toHumanReadable()} with ${this.checkRuns} check runs.`;
    }
    if (this.isAbandoned()) {
      return `PR #${this.prNumber} "${this.title}" was closed without merging after ${this.timeOpen.toHumanReadable()}.`;
    }
    return `PR #${this.prNumber} "${this.title}" has been open for ${this.timeOpen.toHumanReadable()}.`;
  }

  public toJSON(): {
    id: string;
    prNumber: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    mergedAt: string | null;
    closedAt: string | null;
    timeOpen: string;
    checkRuns: number;
    totalDuration: string;
  } {
    return {
      id: this.id.toString(),
      prNumber: this.prNumber,
      title: this.title,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      mergedAt: this.mergedAt ? this.mergedAt.toISOString() : null,
      closedAt: this.closedAt ? this.closedAt.toISOString() : null,
      timeOpen: this.timeOpen.toHumanReadable(),
      checkRuns: this.checkRuns,
      totalDuration: this.totalDuration.toHumanReadable(),
    };
  }
}
