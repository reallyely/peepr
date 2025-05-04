import { DateVO } from "./DateVO.ts";
import { Duration } from "./Duration.ts";
import { ID } from "./ID.ts";

export class Cycle {
  readonly id: ID;
  readonly cycleNumber: number;
  readonly year: number;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly duration: Duration;

  private constructor(id: ID, cycleNumber: number, year: number, startDate: Date, endDate: Date, duration: Duration) {
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
      if (typeof data.cycleNumber !== "number" || data.cycleNumber < 1 || !Number.isInteger(data.cycleNumber)) {
        throw new Error("Cycle number must be a positive integer");
      }

      // Process start date
      const startDate = data.startDate instanceof Date ? data.startDate : new Date(data.startDate);

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
        endDate = data.endDate instanceof Date ? data.endDate : new Date(data.endDate);
        if (Number.isNaN(endDate.getTime())) {
          throw new Error("Invalid end date");
        }

        // Ensure end date is after start date
        if (endDate <= startDate) {
          throw new Error("End date must be after start date");
        }

        duration = Duration.fromMilliseconds(endDate.getTime() - startDate.getTime());
      } else if (data.duration) {
        // If duration is provided, calculate end date from it
        duration = data.duration instanceof Duration ? data.duration : Duration.fromHumanReadable(data.duration);

        endDate = new Date(startDate.getTime() + duration.inMilliseconds);
      } else {
        // Default duration to 2 weeks if neither end date nor duration is provided
        duration = Duration.fromDays(14);
        endDate = new Date(startDate.getTime() + duration.inMilliseconds);
      }

      return new Cycle(ID.create(data.id), data.cycleNumber, year, startDate, endDate, duration);
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Calculate the default cycle number based on the current date
   * Uses an epoch start date of January 1, 2025
   */
  static getDefaultCycleNumber(): number {
    const currentDate = new Date();
    const startDate = new Date(2025, 0, 1); // January 1, 2025
    const daysSinceStart = Math.ceil((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.ceil(daysSinceStart / 7));
  }

  /**
   * Calculate start and end dates for a given cycle number
   * Uses an epoch start date of January 1, 2025
   */
  static getCycleDateRange(cycleNumber: number): { startDate: Date; endDate: Date } {
    if (cycleNumber < 1 || !Number.isInteger(cycleNumber)) {
      throw new Error("Cycle number must be a positive integer");
    }

    const startDate = new Date(2025, 0, 1); // January 1, 2025
    startDate.setDate(startDate.getDate() + (cycleNumber - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // 7-day cycle (0-6)

    return { startDate, endDate };
  }

  /**
   * Creates a Cycle instance for a given cycle number
   * using the standard epoch start date
   */
  static fromCycleNumber(cycleNumber: number, id?: string | number): Cycle {
    const { startDate, endDate } = Cycle.getCycleDateRange(cycleNumber);
    return Cycle.create({
      id,
      cycleNumber,
      startDate,
      endDate,
    });
  }

  /**
   * Returns the date range for this cycle
   */
  getDateRange(): { startDate: Date; endDate: Date } {
    return {
      startDate: this.startDate,
      endDate: this.endDate,
    };
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

  /**
   * Format start date for display
   */
  formatStartDate(options?: Intl.DateTimeFormatOptions): string {
    return DateVO.create(this.startDate).format(options);
  }

  /**
   * Format end date for display
   */
  formatEndDate(options?: Intl.DateTimeFormatOptions): string {
    return DateVO.create(this.endDate).format(options);
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
