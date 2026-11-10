import { describe, test, expect } from "@jest/globals";
import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
  test("characters sould contains Freezzer, Vegeta", () => {
    expect(characters).toEqual(expect.arrayContaining(["Freezzer", "Vegeta"]));
  });
  test("characters first element should be Goku", () => {
    expect(characters[0]).toBe("Goku");
  });
});
