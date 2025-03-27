import { Duration } from "./Duration.ts";

export class IntegrationEvent {
	readonly id: number;
	readonly prNumber: number;
	readonly title: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly mergedAt: Date | null;
	readonly closedAt: Date | null;
	readonly prTimeOpen: Duration;
	readonly pullRequestCheckRuns: number;
	readonly totalDuration: Duration;

	private constructor(
		id: number,
		prNumber: number,
		title: string,
		createdAt: Date,
		updatedAt: Date,
		mergedAt: Date | null,
		closedAt: Date | null,
		prTimeOpen: Duration,
		pullRequestCheckRuns: number,
		totalDuration: Duration,
	) {
		this.id = id;
		this.prNumber = prNumber;
		this.title = title;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.mergedAt = mergedAt;
		this.closedAt = closedAt;
		this.prTimeOpen = prTimeOpen;
		this.pullRequestCheckRuns = pullRequestCheckRuns;
		this.totalDuration = totalDuration;
	}

	static create(data: {
		id?: number;
		prNumber: number;
		title: string;
		createdAt: string | Date;
		updatedAt: string | Date;
		mergedAt?: string | Date | null;
		closedAt?: string | Date | null;
		prTimeOpen: Duration | string;
		pullRequestCheckRuns: number;
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
			const createdAt =
				data.createdAt instanceof Date
					? data.createdAt
					: new Date(data.createdAt);

			const updatedAt =
				data.updatedAt instanceof Date
					? data.updatedAt
					: new Date(data.updatedAt);

			// Optional dates may be null
			const mergedAt = data.mergedAt
				? data.mergedAt instanceof Date
					? data.mergedAt
					: new Date(data.mergedAt)
				: null;

			const closedAt = data.closedAt
				? data.closedAt instanceof Date
					? data.closedAt
					: new Date(data.closedAt)
				: null;

			// Convert string durations to Duration objects if needed
			const prTimeOpen =
				data.prTimeOpen instanceof Duration
					? data.prTimeOpen
					: new Duration(
							typeof data.prTimeOpen === "string"
								? Duration.fromHumanReadable(data.prTimeOpen).inMilliseconds
								: 0,
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
				data.id ?? Math.random(),
				data.prNumber,
				data.title,
				createdAt,
				updatedAt,
				mergedAt,
				closedAt,
				prTimeOpen,
				data.pullRequestCheckRuns,
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
			return `PR #${this.prNumber} "${this.title}" was merged after ${this.prTimeOpen.toHumanReadable()} with ${this.pullRequestCheckRuns} check runs.`;
		}
		if (this.isAbandoned()) {
			return `PR #${this.prNumber} "${this.title}" was closed without merging after ${this.prTimeOpen.toHumanReadable()}.`;
		}
		return `PR #${this.prNumber} "${this.title}" has been open for ${this.prTimeOpen.toHumanReadable()}.`;
	}

	public toJSON(): {
		id: number;
		prNumber: number;
		title: string;
		createdAt: string;
		updatedAt: string;
		mergedAt: string | null;
		closedAt: string | null;
		prTimeOpen: string;
		pullRequestCheckRuns: number;
		totalDuration: string;
	} {
		return {
			id: this.id,
			prNumber: this.prNumber,
			title: this.title,
			createdAt: this.createdAt.toISOString(),
			updatedAt: this.updatedAt.toISOString(),
			mergedAt: this.mergedAt ? this.mergedAt.toISOString() : null,
			closedAt: this.closedAt ? this.closedAt.toISOString() : null,
			prTimeOpen: this.prTimeOpen.toHumanReadable(),
			pullRequestCheckRuns: this.pullRequestCheckRuns,
			totalDuration: this.totalDuration.toHumanReadable(),
		};
	}
}

export type WorkItemIntegrationCreationError = Error;
