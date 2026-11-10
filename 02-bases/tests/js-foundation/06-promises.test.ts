import { describe, test, expect } from "@jest/globals";
import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises", () => {
  test("should return a Pokemon object when called with a valid id", async () => {
    const pokemon = await getPokemonById(1);
    expect(pokemon.name).toBe("bulbasaur");
  });
});
