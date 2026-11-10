import { describe, test, expect } from "@jest/globals";
import { getUserById } from "../../src/js-foundation/04-arrow";

describe("js-foundation/04-arrow", () => {
  test("should return 'Alice' when the callback is called with id = 1", () => {
    getUserById(1, (_, user) => {
      expect(user!.name).toBe("Alice");
    });
  });
  test("should return an error when the callback is called with id = 3", () => {
    getUserById(3, (error, user) => {
      expect(error).toBeInstanceOf(Error);
      expect(error!.message).toBe("User not found");
      expect(user).toBeUndefined();
    });
  });
});