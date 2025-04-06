import { Duration } from "../Duration.ts";

/**
 * Represents a statistical distribution of duration measurements
 * with common statistical properties like median, quartiles, and range
 */
export class StatisticalDistribution {
  readonly median: Duration;
  readonly mean: Duration;
  readonly range: {
    min: Duration;
    max: Duration;
  };
  readonly quartiles: {
    q1: Duration;
    q2: Duration; // same as median
    q3: Duration;
  };

  private constructor(
    median: Duration,
    mean: Duration,
    range: { min: Duration; max: Duration },
    quartiles: { q1: Duration; q2: Duration; q3: Duration }
  ) {
    this.median = median;
    this.mean = mean;
    this.range = range;
    this.quartiles = quartiles;
  }

  /**
   * Creates a StatisticalDistribution from the provided data
   */
  static create(data: {
    median: Duration;
    mean: Duration;
    range: { min: Duration; max: Duration };
    quartiles: { q1: Duration; q2: Duration; q3: Duration };
  }): StatisticalDistribution {
    return new StatisticalDistribution(
      data.median,
      data.mean,
      data.range,
      data.quartiles
    );
  }

  /**
   * Creates an empty distribution with all values set to zero
   */
  static empty(): StatisticalDistribution {
    const zeroDuration = new Duration(0);
    return new StatisticalDistribution(
      zeroDuration,
      zeroDuration,
      { min: zeroDuration, max: zeroDuration },
      { q1: zeroDuration, q2: zeroDuration, q3: zeroDuration }
    );
  }

  toJSON() {
    return {
      median: this.median.toHumanReadable(),
      mean: this.mean.toHumanReadable(),
      range: {
        min: this.range.min.toHumanReadable(),
        max: this.range.max.toHumanReadable()
      },
      quartiles: {
        q1: this.quartiles.q1.toHumanReadable(),
        q2: this.quartiles.q2.toHumanReadable(),
        q3: this.quartiles.q3.toHumanReadable()
      }
    };
  }
}
