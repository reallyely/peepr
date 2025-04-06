import assert from "node:assert";
import { test } from "node:test";
import { Cycle } from "./Cycle.ts";
import { Duration } from "./Duration.ts";
import { IntegrationEvent } from "./IntegrationEvent.ts";

test("Cycle - create with required fields", () => {
  const startDate = new Date("2023-02-01T00:00:00Z");
  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate,
  });

  assert.strictEqual(cycle.cycleNumber, 1);
  assert.strictEqual(cycle.year, 2023);
  assert.strictEqual(cycle.startDate, startDate);

  // Default duration should be 2 weeks
  assert.strictEqual(cycle.duration.inMilliseconds, 14 * 24 * 60 * 60 * 1000);

  // End date should be 2 weeks after start date
  const expectedEndDate = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  assert.strictEqual(cycle.endDate.getTime(), expectedEndDate.getTime());
});

test("Cycle - create with all fields", () => {
  const startDate = new Date("2023-01-01T00:00:00Z");
  const endDate = new Date("2023-01-15T00:00:00Z");
  const cycle = Cycle.create({
    id: 123,
    cycleNumber: 1,
    year: 2023,
    startDate,
    endDate,
  });

  assert.strictEqual(cycle.id.toString(), "123");
  assert.strictEqual(cycle.cycleNumber, 1);
  assert.strictEqual(cycle.year, 2023);
  assert.strictEqual(cycle.startDate, startDate);
  assert.strictEqual(cycle.endDate, endDate);

  // Duration should be calculated from start and end dates
  const expectedDuration = endDate.getTime() - startDate.getTime();
  assert.strictEqual(cycle.duration.inMilliseconds, expectedDuration);
});

test("Cycle - create with duration", () => {
  const startDate = new Date("2023-01-01T00:00:00Z");
  const duration = Duration.fromDays(7);
  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate,
    duration,
  });

  assert.strictEqual(cycle.startDate, startDate);
  assert.strictEqual(cycle.duration, duration);

  // End date should be calculated from start date + duration
  const expectedEndDate = new Date(startDate.getTime() + duration.inMilliseconds);
  assert.strictEqual(cycle.endDate.getTime(), expectedEndDate.getTime());
});

test("Cycle - create with string dates and duration", () => {
  const cycle = Cycle.create({
    cycleNumber: 2,
    year: 2023,
    startDate: "2023-02-01T00:00:00Z",
    duration: "14d",
  });

  assert.strictEqual(cycle.cycleNumber, 2);
  assert.strictEqual(cycle.year, 2023);
  assert.strictEqual(cycle.startDate.toISOString(), "2023-02-01T00:00:00.000Z");
  assert.strictEqual(cycle.duration.toHumanReadable(), "14d");
  assert.strictEqual(cycle.endDate.toISOString(), "2023-02-15T00:00:00.000Z");
});

test("Cycle - validation errors", () => {
  // Invalid cycle number
  assert.throws(() => {
    Cycle.create({
      cycleNumber: 0,
      startDate: new Date(),
    });
  }, /Cycle number must be a positive integer/);

  assert.throws(() => {
    Cycle.create({
      cycleNumber: 1.5,
      startDate: new Date(),
    });
  }, /Cycle number must be a positive integer/);

  // Invalid start date
  assert.throws(() => {
    Cycle.create({
      cycleNumber: 1,
      startDate: "invalid date",
    });
  }, /Invalid start date/);

  // End date before start date
  assert.throws(() => {
    Cycle.create({
      cycleNumber: 1,
      startDate: "2023-01-15T00:00:00Z",
      endDate: "2023-01-01T00:00:00Z",
    });
  }, /End date must be after start date/);
});

test("Cycle - getDateRange method", () => {
  const startDate = new Date("2023-01-01T00:00:00Z");
  const endDate = new Date("2023-01-15T00:00:00Z");
  
  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate,
    endDate,
  });

  const dateRange = cycle.getDateRange();
  
  assert.strictEqual(dateRange.startDate, startDate);
  assert.strictEqual(dateRange.endDate, endDate);
});

test("Cycle - compareTo method", () => {
  const earlierCycle = Cycle.create({
    cycleNumber: 1,
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2023-01-15T00:00:00Z",
  });

  const laterCycle = Cycle.create({
    cycleNumber: 2,
    startDate: "2023-01-16T00:00:00Z",
    endDate: "2023-01-31T00:00:00Z",
  });

  assert.ok(earlierCycle.compareTo(laterCycle) < 0);
  assert.ok(laterCycle.compareTo(earlierCycle) > 0);
  assert.strictEqual(earlierCycle.compareTo(earlierCycle), 0);
});

test("Cycle - getName method", () => {
  const cycle = Cycle.create({
    cycleNumber: 3,
    year: 2023,
    startDate: "2023-03-01T00:00:00Z",
  });

  assert.strictEqual(cycle.getName(), "2023-3");
});

test("Cycle - toJSON method", () => {
  const cycle = Cycle.create({
    id: "123",
    cycleNumber: 1,
    year: 2023,
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2023-01-15T00:00:00Z",
  });

  const json = cycle.toJSON();
  assert.deepStrictEqual(json, {
    id: "123",
    cycleNumber: 1,
    year: 2023,
    startDate: "2023-01-01T00:00:00.000Z",
    endDate: "2023-01-15T00:00:00.000Z",
    duration: "14d",
  });
});
