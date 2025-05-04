/**
 * Date Value Object for standard date operations
 */
export class DateVO {
  private readonly date: Date;

  private constructor(date: Date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
    this.date = new Date(date);
  }

  /**
   * Creates a DateVO from a Date object or string
   */
  static create(value: Date | string): DateVO {
    if (typeof value === "string") {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        throw new Error(`Invalid date string: ${value}`);
      }
      return new DateVO(date);
    }
    return new DateVO(value);
  }

  /**
   * Creates a DateVO from the current date/time
   */
  static now(): DateVO {
    return new DateVO(new Date());
  }

  /**
   * Gets the underlying Date object
   */
  toDate(): Date {
    return new Date(this.date);
  }

  /**
   * Formats the date for display
   */
  format(options?: Intl.DateTimeFormatOptions): string {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return this.date.toLocaleDateString("en-US", options || defaultOptions);
  }

  /**
   * Adds days to the date
   */
  addDays(days: number): DateVO {
    const newDate = new Date(this.date);
    newDate.setDate(newDate.getDate() + days);
    return new DateVO(newDate);
  }

  /**
   * Adds months to the date
   */
  addMonths(months: number): DateVO {
    const newDate = new Date(this.date);
    newDate.setMonth(newDate.getMonth() + months);
    return new DateVO(newDate);
  }

  /**
   * Gets the time in milliseconds since the epoch
   */
  getTime(): number {
    return this.date.getTime();
  }

  /**
   * Gets the year
   */
  getFullYear(): number {
    return this.date.getFullYear();
  }

  /**
   * Compares this date to another date
   * @returns negative if this date is earlier, 0 if same, positive if later
   */
  compareTo(other: DateVO): number {
    return this.date.getTime() - other.date.getTime();
  }

  /**
   * Checks if this date is before another date
   */
  isBefore(other: DateVO): boolean {
    return this.compareTo(other) < 0;
  }

  /**
   * Checks if this date is after another date
   */
  isAfter(other: DateVO): boolean {
    return this.compareTo(other) > 0;
  }

  /**
   * Returns the ISO string representation
   */
  toISOString(): string {
    return this.date.toISOString();
  }

  /**
   * Used for JSON serialization
   */
  toJSON(): string {
    return this.toISOString();
  }

  toString(): string {
    return this.toISOString();
  }
}
