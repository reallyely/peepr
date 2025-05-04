import assert from "node:assert";
import { test } from "node:test";
import { Duration } from "../Duration.ts";
import { IntegrationStatistics } from "./IntegrationStatistics.ts";
import { StatisticalDistribution } from "./StatisticalDistribution.ts";

test("IntegrationStatistics - create with required fields", () => {
  const ciDuration = StatisticalDistribution.create({
    median: Duration.fromMinutes(5),
    mean: Duration.fromMinutes(6),
    range: {
      min: Duration.fromMinutes(1),
      max: Duration.fromMinutes(10),
    },
    quartiles: {
      q1: Duration.fromMinutes(3),
      q2: Duration.fromMinutes(5),
      q3: Duration.fromMinutes(8),
    },
  });

  const openTime = StatisticalDistribution.create({
    median: Duration.fromHours(24),
    mean: Duration.fromHours(30),
    range: {
      min: Duration.fromHours(5),
      max: Duration.fromHours(72),
    },
    quartiles: {
      q1: Duration.fromHours(12),
      q2: Duration.fromHours(24),
      q3: Duration.fromHours(48),
    },
  });

  const stats = IntegrationStatistics.create({
    totalPRs: 25,
    totalCIRuns: 75,
    ciDuration,
    openTime,
  });

  assert.strictEqual(stats.totalPRs, 25);
  assert.strictEqual(stats.totalCIRuns, 75);
  assert.strictEqual(stats.ciDuration, ciDuration);
  assert.strictEqual(stats.openTime, openTime);
});

test("IntegrationStatistics - empty static factory", () => {
  const stats = IntegrationStatistics.empty();

  assert.strictEqual(stats.totalPRs, 0);
  assert.strictEqual(stats.totalCIRuns, 0);
  assert.strictEqual(stats.ciDuration.median.inMilliseconds, 0);
  assert.strictEqual(stats.openTime.median.inMilliseconds, 0);
});

test("IntegrationStatistics - toJSON representation", () => {
  const stats = IntegrationStatistics.create({
    totalPRs: 25,
    totalCIRuns: 75,
    ciDuration: StatisticalDistribution.create({
      median: Duration.fromMinutes(5),
      mean: Duration.fromMinutes(6),
      range: {
        min: Duration.fromMinutes(1),
        max: Duration.fromMinutes(10),
      },
      quartiles: {
        q1: Duration.fromMinutes(3),
        q2: Duration.fromMinutes(5),
        q3: Duration.fromMinutes(8),
      },
    }),
    openTime: StatisticalDistribution.create({
      median: Duration.fromHours(24),
      mean: Duration.fromHours(30),
      range: {
        min: Duration.fromHours(5),
        max: Duration.fromHours(72),
      },
      quartiles: {
        q1: Duration.fromHours(12),
        q2: Duration.fromHours(24),
        q3: Duration.fromHours(48),
      },
    }),
  });

  const json = stats.toJSON();

  assert.strictEqual(json.totalPRs, 25);
  assert.strictEqual(json.totalCIRuns, 75);
  assert.strictEqual(json.ciDuration.median, "5m");
  assert.strictEqual(json.openTime.median, "1d");
});
