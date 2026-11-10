import { uuidv4 } from "../../src/plugins/uuid.plugin";
import { describe, test, expect, jest } from "@jest/globals";

describe("plugins/uuid.plugin", () => {
  test("should return a valid UUID", () => {
    const uuid = uuidv4();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
