import assert from "node:assert";
import { test } from "node:test";
import { DateVO } from "./DateVO.ts";

test("DateVO - create from Date object", () => {
  const date = new Date("2023-01-15T12:30:00Z");
  const dateVO = DateVO.create(date);

  assert.strictEqual(dateVO.toDate().getTime(), date.getTime());
});

test("DateVO - create from string", () => {
  const dateString = "2023-01-15T12:30:00Z";
  const dateVO = DateVO.create(dateString);

  assert.strictEqual(dateVO.toISOString(), new Date(dateString).toISOString());
});

test("DateVO - now static method", () => {
  const before = Date.now();
  const dateVO = DateVO.now();
  const after = Date.now();

  const time = dateVO.getTime();
  assert.ok(time >= before && time <= after);
});

test("DateVO - format method", () => {
  const dateVO = DateVO.create("2023-01-15T12:30:00Z");

  const formatted = dateVO.format();
  assert.strictEqual(formatted, "Jan 15, 2023");

  const customFormatted = dateVO.format({
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  assert.strictEqual(customFormatted, "January 15, 2023");
});

test("DateVO - addDays method", () => {
  const dateVO = DateVO.create("2023-01-15T12:30:00Z");
  const newDateVO = dateVO.addDays(5);

  assert.strictEqual(newDateVO.toDate().toISOString().split("T")[0], "2023-01-20");
});

test("DateVO - addMonths method", () => {
  const dateVO = DateVO.create("2023-01-15T12:30:00Z");
  const newDateVO = dateVO.addMonths(2);

  assert.strictEqual(newDateVO.toDate().toISOString().split("T")[0], "2023-03-15");
});

test("DateVO - comparison methods", () => {
  const earlier = DateVO.create("2023-01-01T00:00:00Z");
  const later = DateVO.create("2023-01-15T00:00:00Z");

  assert.ok(earlier.isBefore(later));
  assert.ok(later.isAfter(earlier));
  assert.ok(earlier.compareTo(later) < 0);
  assert.ok(later.compareTo(earlier) > 0);
});

test("DateVO - validation on creation", () => {
  assert.throws(() => {
    DateVO.create("invalid-date-string");
  }, /Invalid date string/);
});
