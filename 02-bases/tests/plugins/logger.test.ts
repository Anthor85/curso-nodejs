import { buildLogger } from "../../src/plugins/logger.plugin";
import { describe, test, expect, jest } from "@jest/globals";

describe("plugins/logger.plugin", () => {
  test("should call log correctly", () => {
    const logger = buildLogger("test");
    const spy = jest.spyOn(logger, "log");
    logger.log("This is a test log");
    expect(typeof logger.log).toBe("function");
    expect(spy).toHaveBeenCalledWith("This is a test log");
  });
  test("should call error correctly", () => {
    const logger = buildLogger("test");
    const spy = jest.spyOn(logger, "error");
    logger.error("This is a test error");
    expect(typeof logger.error).toBe("function");
    expect(spy).toHaveBeenCalledWith("This is a test error");
  });
});
