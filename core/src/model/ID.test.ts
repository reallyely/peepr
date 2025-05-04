import assert from "node:assert";
import { test } from "node:test";
import { ID } from "./ID.ts";

test("ID - create without parameter generates unique IDs", () => {
  const id1 = ID.create();
  const id2 = ID.create();

  assert.notStrictEqual(id1.toString(), id2.toString());
});

test("ID - create with string parameter", () => {
  const idValue = "test-id-123";
  const id = ID.create(idValue);

  assert.strictEqual(id.toString(), idValue);
});

test("ID - create with number parameter", () => {
  const idValue = 12345;
  const id = ID.create(idValue);

  assert.strictEqual(id.toString(), idValue.toString());
});

test("ID - equals method", () => {
  const id1 = ID.create("same-id");
  const id2 = ID.create("same-id");
  const id3 = ID.create("different-id");

  assert.strictEqual(id1.equals(id2), true);
  assert.strictEqual(id1.equals(id3), false);
});

test("ID - toJSON method", () => {
  const idValue = "json-test-id";
  const id = ID.create(idValue);

  const json = JSON.stringify({ id });
  const parsed = JSON.parse(json);

  assert.strictEqual(parsed.id, idValue);
});
