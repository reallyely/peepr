import { Duration } from "./Duration.ts";
import { ID } from "./ID.ts";
import type { IntegrationEvent } from "./IntegrationEvent.ts";

export class Cycle {
  readonly id: ID;
  readonly cycleNumber: number;
  readonly year: number;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly duration: Duration;

  private constructor(
    id: ID,
    cycleNumber: number,
    year: number,
    startDate: Date,
    endDate: Date,
    duration: Duration,
  ) {
    this.id = id;
    this.cycleNumber = cycleNumber;
    this.year = year;
    this.startDate = startDate;
    this.endDate = endDate;
    this.duration = duration;
  }

  static create(data: {
    id?: string | number;
    cycleNumber: number;
    year?: number;
    startDate: Date | string;
    duration?: Duration | string;
    endDate?: Date | string;
  }): Cycle {
    try {
      // Validate required fields
      if (
        typeof data.cycleNumber !== "number" ||
        data.cycleNumber < 1 ||
        !Number.isInteger(data.cycleNumber)
      ) {
        throw new Error("Cycle number must be a positive integer");
      }

      // Process start date
      const startDate =
        data.startDate instanceof Date
          ? data.startDate
          : new Date(data.startDate);

      if (Number.isNaN(startDate.getTime())) {
        throw new Error("Invalid start date");
      }

      // Determine year if not provided
      const year = data.year ?? startDate.getFullYear();
      if (typeof year !== "number" || !Number.isInteger(year)) {
        throw new Error("Year must be an integer");
      }

      // Calculate end date and duration
      let endDate: Date;
      let duration: Duration;

      if (data.endDate) {
        // If end date is provided, calculate duration from it
        endDate =
          data.endDate instanceof Date ? data.endDate : new Date(data.endDate);
        if (Number.isNaN(endDate.getTime())) {
          throw new Error("Invalid end date");
        }

        // Ensure end date is after start date
        if (endDate <= startDate) {
          throw new Error("End date must be after start date");
        }

        duration = Duration.fromMilliseconds(
          endDate.getTime() - startDate.getTime(),
        );
      } else if (data.duration) {
        // If duration is provided, calculate end date from it
        duration =
          data.duration instanceof Duration
            ? data.duration
            : Duration.fromHumanReadable(data.duration);

        endDate = new Date(startDate.getTime() + duration.inMilliseconds);
      } else {
        // Default duration to 2 weeks if neither end date nor duration is provided
        duration = Duration.fromDays(14);
        endDate = new Date(startDate.getTime() + duration.inMilliseconds);
      }

      return new Cycle(
        ID.create(data.id),
        data.cycleNumber,
        year,
        startDate,
        endDate,
        duration,
      );
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Determines if an integration event falls within this cycle
   */
  containsIntegration(integration: IntegrationEvent): boolean {
    // An integration is in a cycle if its creation date is within the cycle period
    const integrationDate = integration.createdAt.getTime();
    return (
      integrationDate >= this.startDate.getTime() &&
      integrationDate <= this.endDate.getTime()
    );
  }

  /**
   * Filters a list of integration events to only those that occurred during this cycle
   */
  filterIntegrations(integrations: IntegrationEvent[]): IntegrationEvent[] {
    return integrations.filter((integration) =>
      this.containsIntegration(integration),
    );
  }

  /**
   * Compares this cycle to another cycle
   * @returns negative if this cycle is earlier, 0 if same time period, positive if later
   */
  compareTo(other: Cycle): number {
    // Compare by start date
    return this.startDate.getTime() - other.startDate.getTime();
  }

  /**
   * Gets the cycle name
   */
  getName(): string {
    return `${this.year}-${this.cycleNumber}`;
  }

  toString(): string {
    return this.getName();
  }

  toJSON(): {
    id: string;
    cycleNumber: number;
    year: number;
    startDate: string;
    endDate: string;
    duration: string;
  } {
    return {
      id: this.id.toString(),
      cycleNumber: this.cycleNumber,
      year: this.year,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      duration: this.duration.toHumanReadable(),
    };
  }
}
