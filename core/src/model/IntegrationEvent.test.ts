import assert from "node:assert";
import { test } from "node:test";
import { Duration } from "./Duration.ts";
import { IntegrationEvent } from "./IntegrationEvent.ts";
Event;

test("IntegrationEvent - create with required fields", () => {
  const integration = IntegrationEvent.create({
    prNumber: 123,
    title: "Test PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(integration.prNumber, 123);
  assert.strictEqual(integration.title, "Test PR");
  assert.strictEqual(integration.createdAt.toISOString(), "2023-01-01T00:00:00.000Z");
  assert.strictEqual(integration.updatedAt.toISOString(), "2023-01-02T00:00:00.000Z");
  assert.strictEqual(integration.mergedAt, null);
  assert.strictEqual(integration.closedAt, null);
  assert.ok(integration.timeOpen instanceof Duration);
  assert.strictEqual(integration.timeOpen.toHumanReadable(), "2h 30m");
  assert.strictEqual(integration.checkRuns, 5);
  assert.strictEqual(integration.totalDuration.toHumanReadable(), "3h 45m");
});

test("IntegrationEvent - create with all fields", () => {
  const integration = IntegrationEvent.create({
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

  assert.strictEqual(integration.id.toString(), "456");
  assert.strictEqual(integration.mergedAt?.toISOString(), "2023-01-03T00:00:00.000Z");
  assert.strictEqual(integration.closedAt?.toISOString(), "2023-01-03T00:00:00.000Z");
});

test("IntegrationEvent - create with Date objects", () => {
  const createdAt = new Date("2023-01-01T00:00:00Z");
  const updatedAt = new Date("2023-01-02T00:00:00Z");
  const mergedAt = new Date("2023-01-03T00:00:00Z");

  const integration = IntegrationEvent.create({
    prNumber: 123,
    title: "Test PR",
    createdAt,
    updatedAt,
    mergedAt,
    timeOpen: new Duration(9000000), // 2.5 hours in ms
    checkRuns: 5,
    totalDuration: new Duration(13500000), // 3.75 hours in ms
  });

  assert.strictEqual(integration.createdAt, createdAt);
  assert.strictEqual(integration.updatedAt, updatedAt);
  assert.strictEqual(integration.mergedAt, mergedAt);
});

test("IntegrationEvent - validation errors", () => {
  assert.throws(() => {
    IntegrationEvent.create({
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
    IntegrationEvent.create({
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

test("IntegrationEvent - state methods", () => {
  // In progress
  const inProgressIntegration = IntegrationEvent.create({
    prNumber: 123,
    title: "In Progress PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(inProgressIntegration.isInProgress(), true);
  assert.strictEqual(inProgressIntegration.isComplete(), false);
  assert.strictEqual(inProgressIntegration.isAbandoned(), false);

  // Completed
  const completedIntegration = IntegrationEvent.create({
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

  assert.strictEqual(completedIntegration.isInProgress(), false);
  assert.strictEqual(completedIntegration.isComplete(), true);
  assert.strictEqual(completedIntegration.isAbandoned(), false);

  // Abandoned
  const abandonedIntegration = IntegrationEvent.create({
    prNumber: 123,
    title: "Abandoned PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    closedAt: "2023-01-03T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(abandonedIntegration.isInProgress(), false);
  assert.strictEqual(abandonedIntegration.isComplete(), false);
  assert.strictEqual(abandonedIntegration.isAbandoned(), true);
});

test("IntegrationEvent - getSummary method", () => {
  // In progress
  const inProgressIntegration = IntegrationEvent.create({
    prNumber: 123,
    title: "In Progress PR",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    timeOpen: "2h 30m",
    checkRuns: 5,
    totalDuration: "3h 45m",
  });

  assert.strictEqual(inProgressIntegration.getSummary(), 'PR #123 "In Progress PR" has been open for 2h 30m.');

  // Completed
  const completedIntegration = IntegrationEvent.create({
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
    completedIntegration.getSummary(),
    'PR #123 "Completed PR" was merged after 2h 30m with 5 check runs.',
  );

  // Abandoned
  const abandonedIntegration = IntegrationEvent.create({
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
    abandonedIntegration.getSummary(),
    'PR #123 "Abandoned PR" was closed without merging after 2h 30m.',
  );
});

test("IntegrationEvent - toJSON method", () => {
  const integration = IntegrationEvent.create({
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

  const json = integration.toJSON();

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
