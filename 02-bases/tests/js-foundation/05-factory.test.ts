import { describe, test, expect } from "@jest/globals";
import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory", () => {
  const uuidv4 = () => "1234";
  const getAge = () => 35;

  test("should create a person with the given name and birthdate", () => {
    const makePerson = buildMakePerson({ uuidv4, getAge });
    const person = makePerson({
      name: "Alice",
      birthdate: new Date("1990-01-01").toString(),
      city: "Marruecos",
    });
    expect(typeof makePerson).toBe("function");
    expect(person.name).toBe("Alice");
    expect(person.age).toBe(35);
  });
});
