import { emailTemplate } from "../../src/js-foundation/01-template";
import { describe, test, expect } from "@jest/globals";

describe("js-foundation/01-template.ts", () => {
  test("should contain a greeting", () => {
    expect(emailTemplate).toContain(`Hi,`);
  });
  test("should contain {{name}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
  });
});
