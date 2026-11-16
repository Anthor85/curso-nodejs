import { ServerApp } from "../src/presentation/server-app";

describe("App", () => {
  test("should call Server.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = [
      "node",
      "app.ts",
      "--base=5",
      "--limit=10",
      "--show=true",
      "--name=tableName",
      "--destination=mock",
    ];

    await import("../src/app.js");

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      showTable: true,
      name: "tableName",
      destination: "mock",
    });
  });
});
