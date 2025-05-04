import assert from "node:assert";
import { test } from "node:test";
import { Duration } from "../model/Duration.ts";
import { IntegrationEvent } from "../model/IntegrationEvent.ts";
import { StatisticsService } from "./StatisticsService.ts";

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
      totalDuration: Duration.fromMinutes(30),
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
      totalDuration: Duration.fromMinutes(15),
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
      totalDuration: Duration.fromMinutes(45),
    }),
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
