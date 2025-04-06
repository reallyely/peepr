import assert from "node:assert";
import { test } from "node:test";
import { Duration } from "../model/Duration.ts";
import { IntegrationEvent } from "../model/IntegrationEvent.ts";
import { StatisticsService, calculateStatisticalDistribution } from "./StatisticsService.ts";

test("StatisticsService - generateStatistics with empty array", () => {
  const stats = StatisticsService.generateStatistics([]);

  assert.strictEqual(stats.totalPRs, 0);
  assert.strictEqual(stats.totalCIRuns, 0);
  assert.strictEqual(stats.ciDuration.median.inMilliseconds, 0);
  assert.strictEqual(stats.openTime.median.inMilliseconds, 0);
});

test("StatisticsService - generateStatistics with integration events", () => {
  const events = [
    IntegrationEvent.create({
      prNumber: 123,
      title: "First PR",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-02T00:00:00Z",
      mergedAt: "2023-01-03T00:00:00Z",
      closedAt: "2023-01-03T00:00:00Z",
      timeOpen: Duration.fromHours(48),
      checkRuns: 3,
      totalDuration: Duration.fromMinutes(30)
    }),
    IntegrationEvent.create({
      prNumber: 124,
      title: "Second PR",
      createdAt: "2023-01-04T00:00:00Z",
      updatedAt: "2023-01-05T00:00:00Z",
      mergedAt: "2023-01-06T00:00:00Z",
      closedAt: "2023-01-06T00:00:00Z",
      timeOpen: Duration.fromHours(24),
      checkRuns: 2,
      totalDuration: Duration.fromMinutes(15)
    }),
    IntegrationEvent.create({
      prNumber: 125,
      title: "Third PR",
      createdAt: "2023-01-07T00:00:00Z",
      updatedAt: "2023-01-08T00:00:00Z",
      mergedAt: "2023-01-10T00:00:00Z",
      closedAt: "2023-01-10T00:00:00Z",
      timeOpen: Duration.fromHours(72),
      checkRuns: 5,
      totalDuration: Duration.fromMinutes(45)
    })
  ];

  const stats = StatisticsService.generateStatistics(events);

  // Basic counts
  assert.strictEqual(stats.totalPRs, 3);
  assert.strictEqual(stats.totalCIRuns, 10); // 3 + 2 + 5

  // Check CI duration statistics
  assert.strictEqual(stats.ciDuration.median.inMinutes, 30); // [15, 30, 45] -> 30

  // Check open time statistics
  assert.strictEqual(stats.openTime.median.inHours, 48); // [24, 48, 72] -> 48
});

test("StatisticsService - calculateStatisticalDistribution with sorted data", () => {
  // Using the private method directly to test it specifically
  // This would typically use a different pattern in a real-world scenario
  // @ts-ignore - Accessing private method for testing
  const distribution = calculateStatisticalDistribution([
    Duration.fromMinutes(10),
    Duration.fromMinutes(20),
    Duration.fromMinutes(30),
    Duration.fromMinutes(40),
    Duration.fromMinutes(50)
  ]);

  assert.strictEqual(distribution.median.inMinutes, 30);
  assert.strictEqual(distribution.mean.inMinutes, 30);
  assert.strictEqual(distribution.range.min.inMinutes, 10);
  assert.strictEqual(distribution.range.max.inMinutes, 50);
  assert.strictEqual(distribution.quartiles.q1.inMinutes, 20);
  assert.strictEqual(distribution.quartiles.q3.inMinutes, 40);
});
