import assert from "node:assert";
import { test } from "node:test";
import { StatisticalDistribution } from "./StatisticalDistribution.ts";
import { Duration } from "../Duration.ts";

test("StatisticalDistribution - create with required fields", () => {
  const median = new Duration(5000);
  const mean = new Duration(6000);
  const min = new Duration(1000);
  const max = new Duration(10000);
  const q1 = new Duration(3000);
  const q3 = new Duration(8000);

  const distribution = StatisticalDistribution.create({
    median,
    mean,
    range: { min, max },
    quartiles: { q1, q2: median, q3 }
  });

  assert.strictEqual(distribution.median, median);
  assert.strictEqual(distribution.mean, mean);
  assert.strictEqual(distribution.range.min, min);
  assert.strictEqual(distribution.range.max, max);
  assert.strictEqual(distribution.quartiles.q1, q1);
  assert.strictEqual(distribution.quartiles.q2, median);
  assert.strictEqual(distribution.quartiles.q3, q3);
});

test("StatisticalDistribution - empty static factory", () => {
  const distribution = StatisticalDistribution.empty();

  assert.strictEqual(distribution.median.inMilliseconds, 0);
  assert.strictEqual(distribution.mean.inMilliseconds, 0);
  assert.strictEqual(distribution.range.min.inMilliseconds, 0);
  assert.strictEqual(distribution.range.max.inMilliseconds, 0);
  assert.strictEqual(distribution.quartiles.q1.inMilliseconds, 0);
  assert.strictEqual(distribution.quartiles.q2.inMilliseconds, 0);
  assert.strictEqual(distribution.quartiles.q3.inMilliseconds, 0);
});

test("StatisticalDistribution - toJSON representation", () => {
  const distribution = StatisticalDistribution.create({
    median: Duration.fromMinutes(5),
    mean: Duration.fromMinutes(6),
    range: {
      min: Duration.fromMinutes(1),
      max: Duration.fromMinutes(10)
    },
    quartiles: {
      q1: Duration.fromMinutes(3),
      q2: Duration.fromMinutes(5),
      q3: Duration.fromMinutes(8)
    }
  });

  const json = distribution.toJSON();

  assert.strictEqual(json.median, "5m");
  assert.strictEqual(json.mean, "6m");
  assert.strictEqual(json.range.min, "1m");
  assert.strictEqual(json.range.max, "10m");
  assert.strictEqual(json.quartiles.q1, "3m");
  assert.strictEqual(json.quartiles.q2, "5m");
  assert.strictEqual(json.quartiles.q3, "8m");
});
