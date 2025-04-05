import type { IntegrationEvent } from "@peepr/core";

// Convert duration string to minutes for calculation
export const durationToMinutes = (duration: string): number => {
  if (!duration) return 0;

  const hourMatch = duration.match(/(\d+)h/);
  const minMatch = duration.match(/(\d+)m/);

  const hours = hourMatch ? Number.parseInt(hourMatch[1], 10) : 0;
  const minutes = minMatch ? Number.parseInt(minMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

// Format minutes back to human-readable duration
export const minutesToDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

// Helper functions for statistics calculations
export const calculateMedian = (values: number[]): number => {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

export const calculateRange = (
  values: number[],
): { min: number; max: number } => {
  if (values.length === 0) return { min: 0, max: 0 };

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
};

export const calculateQuartiles = (
  values: number[],
): { q1: number; q2: number; q3: number } => {
  if (values.length === 0) return { q1: 0, q2: 0, q3: 0 };

  const sorted = [...values].sort((a, b) => a - b);
  const q2 = calculateMedian(sorted);

  const lowerHalf = sorted.slice(0, Math.floor(sorted.length / 2));
  const upperHalf =
    sorted.length % 2 === 0
      ? sorted.slice(Math.floor(sorted.length / 2))
      : sorted.slice(Math.floor(sorted.length / 2) + 1);

  return {
    q1: calculateMedian(lowerHalf),
    q2,
    q3: calculateMedian(upperHalf),
  };
};

export interface StatisticsResult {
  ciDuration: {
    median: string;
    range: {
      min: string;
      max: string;
    };
    quartiles: {
      q1: string;
      q2: string;
      q3: string;
    };
  };
  openTime: {
    median: string;
    range: {
      min: string;
      max: string;
    };
    quartiles: {
      q1: string;
      q2: string;
      q3: string;
    };
  };
  totalPRs: number;
  totalCIRuns: number;
}

export const generateStatistics = (
  prs: IntegrationEvent[],
): StatisticsResult | null => {
  if (!Array.isArray(prs)) return null;

  // Extract CI durations and PR open times
  const ciDurations = prs.map((pr) => pr.totalDuration.inMinutes);
  const openTimes = prs.map((pr) => pr.prTimeOpen.inMinutes);

  return {
    ciDuration: {
      median: minutesToDuration(calculateMedian(ciDurations)),
      range: {
        min: minutesToDuration(calculateRange(ciDurations).min),
        max: minutesToDuration(calculateRange(ciDurations).max),
      },
      quartiles: {
        q1: minutesToDuration(calculateQuartiles(ciDurations).q1),
        q2: minutesToDuration(calculateQuartiles(ciDurations).q2),
        q3: minutesToDuration(calculateQuartiles(ciDurations).q3),
      },
    },
    openTime: {
      median: minutesToDuration(calculateMedian(openTimes)),
      range: {
        min: minutesToDuration(calculateRange(openTimes).min),
        max: minutesToDuration(calculateRange(openTimes).max),
      },
      quartiles: {
        q1: minutesToDuration(calculateQuartiles(openTimes).q1),
        q2: minutesToDuration(calculateQuartiles(openTimes).q2),
        q3: minutesToDuration(calculateQuartiles(openTimes).q3),
      },
    },
    totalPRs: prs.length,
    totalCIRuns: prs.reduce((sum, pr) => sum + pr.pullRequestCheckRuns, 0),
  };
};
