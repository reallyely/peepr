// NOTE: Is this actually useful? It's too specific to Duration
// we have to basically provide the whole data structure so what does it really do?
import { Duration } from "./Duration.ts";

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
    quartiles: { q1: Duration; q2: Duration; q3: Duration },
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
    return new StatisticalDistribution(data.median, data.mean, data.range, data.quartiles);
  }

  /**
   * Creates a StatisticalDistribution from an array of Duration objects
   */
  static fromDurations(durations: Duration[]): StatisticalDistribution {
    if (durations.length === 0) {
      return StatisticalDistribution.empty();
    }

    // Sort durations by milliseconds for percentile calculations
    const sorted = [...durations].sort((a, b) => a.inMilliseconds - b.inMilliseconds);

    // Calculate mean
    const totalMs = durations.reduce((sum, duration) => sum + duration.inMilliseconds, 0);
    const mean = new Duration(totalMs / durations.length);

    // Calculate range
    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    // Calculate quartiles
    const getPercentile = (percentile: number): Duration => {
      const index = (percentile / 100) * (sorted.length - 1);
      const lower = Math.floor(index);
      const upper = Math.ceil(index);

      if (lower === upper) {
        return sorted[lower];
      }

      // Linear interpolation between the two closest values
      const weight = index - lower;
      const lowerMs = sorted[lower].inMilliseconds;
      const upperMs = sorted[upper].inMilliseconds;
      const interpolatedMs = lowerMs + weight * (upperMs - lowerMs);

      return new Duration(interpolatedMs);
    };

    const q1 = getPercentile(25);
    const median = getPercentile(50);
    const q3 = getPercentile(75);

    return new StatisticalDistribution(
      median,
      mean,
      { min, max },
      { q1, q2: median, q3 },
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
      { q1: zeroDuration, q2: zeroDuration, q3: zeroDuration },
    );
  }

  toJSON() {
    return {
      median: this.median.toHumanReadable(),
      mean: this.mean.toHumanReadable(),
      range: {
        min: this.range.min.toHumanReadable(),
        max: this.range.max.toHumanReadable(),
      },
      quartiles: {
        q1: this.quartiles.q1.toHumanReadable(),
        q2: this.quartiles.q2.toHumanReadable(),
        q3: this.quartiles.q3.toHumanReadable(),
      },
    };
  }
}
