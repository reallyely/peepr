import assert from "node:assert";
import { test } from "node:test";
import { Duration } from "@peepr/core";
import { PullRequest } from "./PullRequest.ts";

test("PullRequest - create with required fields", () => {
  const pr = PullRequest.create({
    prNumber: 123,
    title: "Test PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(pr.data.prNumber, 123);
  assert.strictEqual(pr.data.title, "Test PR");
  assert.strictEqual(pr.data.createdAt.toISOString(), "2023-01-01T00:00:00.000Z");
  assert.strictEqual(pr.data.updatedAt.toISOString(), "2023-01-02T00:00:00.000Z");
  assert.strictEqual(pr.data.mergedAt, null);
  assert.strictEqual(pr.data.closedAt, null);
  assert.ok(pr.data.timeOpen instanceof Duration);
  assert.strictEqual(pr.data.timeOpen.toHumanReadable(), "2h 30m");
  assert.strictEqual(pr.data.checkRuns, 5);
  assert.strictEqual(pr.data.totalDuration.toHumanReadable(), "3h 45m");
});

test("PullRequest - create with all fields", () => {
  const pr = PullRequest.create({
    id: 456,
    prNumber: 123,
    title: "Test PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    mergedAt: "2023-01-03T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(pr.id.toString(), "456");
  assert.strictEqual(pr.data.mergedAt?.toISOString(), "2023-01-03T00:00:00.000Z");
  assert.strictEqual(pr.data.closedAt?.toISOString(), "2023-01-03T00:00:00.000Z");
});

test("PullRequest - create with Date objects", () => {
  const createdAt = new Date("2023-01-01T00:00:00Z");
  const updatedAt = new Date("2023-01-02T00:00:00Z");
  const mergedAt = new Date("2023-01-03T00:00:00Z");

  const pr = PullRequest.create({
    prNumber: 123,
    title: "Test PR",
    createdAt,
    updatedAt,
    mergedAt,
    timeOpen: new Duration(9000000), // 2.5 hours in ms
    checkRuns: 5,
    totalDuration: new Duration(13500000), // 3.75 hours in ms
  });

  assert.strictEqual(pr.data.createdAt, createdAt);
  assert.strictEqual(pr.data.updatedAt, updatedAt);
  assert.strictEqual(pr.data.mergedAt, mergedAt);
});

test("PullRequest - validation errors", () => {
  assert.throws(() => {
    PullRequest.create({
      // @ts-ignore - this is expected to throw
      prNumber: "123",
      title: "Test PR",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-02T00:00:00Z",
      timeOpen: "2h 30m",
      checkRuns: 5,
      totalDuration: "3h 45m",
    });
  }, /PR number is required and must be a number/);

  assert.throws(() => {
    PullRequest.create({
      prNumber: 123,
      title: null,
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-02T00:00:00Z",
      timeOpen: "2h 30m",
      checkRuns: 5,
      totalDuration: "3h 45m",
    });
  }, /Title is required and must be a string/);
});

test("PullRequest - state methods", () => {
  // In progress
  const inProgressPr = PullRequest.create({
    prNumber: 123,
    title: "In Progress PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(inProgressPr.isInProgress(), true);
  assert.strictEqual(inProgressPr.isComplete(), false);
  assert.strictEqual(inProgressPr.isAbandoned(), false);

  // Completed
  const completedPr = PullRequest.create({
    prNumber: 123,
    title: "Completed PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    mergedAt: "2023-01-03T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(completedPr.isInProgress(), false);
  assert.strictEqual(completedPr.isComplete(), true);
  assert.strictEqual(completedPr.isAbandoned(), false);

  // Abandoned
  const abandonedPr = PullRequest.create({
    prNumber: 123,
    title: "Abandoned PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(abandonedPr.isInProgress(), false);
  assert.strictEqual(abandonedPr.isComplete(), false);
  assert.strictEqual(abandonedPr.isAbandoned(), true);
});

test("PullRequest - getSummary method", () => {
  // In progress
  const inProgressPr = PullRequest.create({
    prNumber: 123,
    title: "In Progress PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(inProgressPr.getSummary(), 'PR #123 "In Progress PR" has been open for 2h 30m.');

  // Completed
  const completedPr = PullRequest.create({
    prNumber: 123,
    title: "Completed PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    mergedAt: "2023-01-03T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(
    completedPr.getSummary(),
    'PR #123 "Completed PR" was merged after 2h 30m with 5 check runs.',
  );

  // Abandoned
  const abandonedPr = PullRequest.create({
    prNumber: 123,
    title: "Abandoned PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(
    abandonedPr.getSummary(),
    'PR #123 "Abandoned PR" was closed without merging after 2h 30m.',
  );
});

test("PullRequest - toJSON method", () => {
  const pr = PullRequest.create({
    id: "456",
    prNumber: 123,
    title: "Test PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    mergedAt: "2023-01-03T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  const json = pr.toJSON();

  assert.deepStrictEqual(json, {
    id: "456",
    prNumber: 123,
    title: "Test PR",
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-02T00:00:00.000Z",
    mergedAt: "2023-01-03T00:00:00.000Z",
    closedAt: "2023-01-03T00:00:00.000Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });
});
