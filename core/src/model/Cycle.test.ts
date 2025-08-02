import assert from "node:assert";
import { test } from "node:test";
import { Cycle } from "./Cycle.ts";
import { Duration } from "./Duration.ts";

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

test("Cycle - getDefaultCycleNumber", () => {
  // This test is time-dependent, so we can only verify it returns a positive integer
  const cycleNumber = Cycle.getDefaultCycleNumber();
  assert.ok(Number.isInteger(cycleNumber));
  assert.ok(cycleNumber > 0);
});

test("Cycle - getCycleDateRange", () => {
  const { startDate, endDate } = Cycle.getCycleDateRange(3);

  // Cycle 3 starts on January 15, 2025 (2 weeks after January 1)
  assert.strictEqual(startDate.getFullYear(), 2025);
  assert.strictEqual(startDate.getMonth(), 0); // January
  assert.strictEqual(startDate.getDate(), 15);

  // Ends 6 days later (January 21, 2025)
  assert.strictEqual(endDate.getFullYear(), 2025);
  assert.strictEqual(endDate.getMonth(), 0); // January
  assert.strictEqual(endDate.getDate(), 21);
});

test("Cycle - fromCycleNumber", () => {
  const cycle = Cycle.fromCycleNumber(5, "test-id");

  assert.strictEqual(cycle.id.toString(), "test-id");
  assert.strictEqual(cycle.cycleNumber, 5);
  assert.strictEqual(cycle.year, 2025);

  // Verify dates are correctly calculated for cycle 5
  const expectedStartDate = new Date(2025, 0, 1);
  expectedStartDate.setDate(expectedStartDate.getDate() + (5 - 1) * 7);
  assert.strictEqual(cycle.startDate.getTime(), expectedStartDate.getTime());

  const expectedEndDate = new Date(expectedStartDate);
  expectedEndDate.setDate(expectedEndDate.getDate() + 6);
  assert.strictEqual(cycle.endDate.getTime(), expectedEndDate.getTime());
});

test("Cycle - format date methods", () => {
  const dateStr = "2023-01-01T12:00:00Z";
  const cycle = Cycle.create({
    cycleNumber: 1,
    startDate: dateStr,
    endDate: "2023-01-15T12:00:00Z",
  });

  // Using exact UTC date to avoid timezone issues in testing
  const expectedDate = new Date(dateStr);
  const expected = expectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  assert.strictEqual(cycle.formatStartDate(), expected);

  // Test that formatting is applied
  const customFormat = cycle.formatStartDate({ year: "numeric", month: "long" });
  assert.ok(customFormat.includes("January"));
  assert.ok(customFormat.includes("2023"));
});
