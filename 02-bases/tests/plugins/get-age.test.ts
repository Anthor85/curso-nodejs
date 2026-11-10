import { getAge } from "../../src/plugins/get-age.plugin";
import { describe, test, expect, jest } from "@jest/globals";

describe("plugins/get-age.plugin", () => {

  test("should return correct age when call get-age plugin", () => {
    const birthdate = "01/01/2000";
    const age = getAge(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toEqual(calculatedAge);
  });

  test("getAge should return 0", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const birthdate = "1995-10-21";
    expect(getAge(birthdate)).toBe(0);
  });
});
