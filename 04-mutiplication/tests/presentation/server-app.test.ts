import fs from "fs";
import { CreateTable } from "../../src/domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../../src/domain/use-cases/save-file.use-case.js";
import { ServerApp } from "../../src/presentation/server-app.js";

describe("Server App", () => {
  const options = {
    base: 5,
    limit: 10,
    showTable: false,
    name: "tableName",
    destination: "mock",
  };

  afterEach(() => {
    jest.restoreAllMocks();
    fs.existsSync(options.destination) &&
      fs.rmSync(options.destination, { recursive: true });
  });

  test("should return a server instance", async () => {
    expect(new ServerApp()).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  // test("should run ServerApp with options", () => {
  //   const logSpy = jest.spyOn(console, "log");
  //   const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
  //   const SaveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

  //   ServerApp.run(options);
  //   expect(logSpy).toHaveBeenCalledTimes(3);
  //   expect(logSpy).toHaveBeenCalledWith("Server is running...");

  //   expect(createTableSpy).toHaveBeenCalledTimes(1);
  //   expect(createTableSpy).toHaveBeenCalledWith({
  //     base: options.base,
  //     limit: options.limit,
  //   });

  //   expect(SaveFileSpy).toHaveBeenCalledTimes(1);
  //   expect(SaveFileSpy).toHaveBeenCalledWith({
  //     fileContent: expect.any(String),
  //     destination: options.destination,
  //     fileName: options.name,
  //   });
  // });

  test("should run ServerApp with custom values mocked", () => {
    const logMock = jest.fn();
    console.log = logMock;
    const createTableMock = jest.fn().mockReturnValue("mocked table");
    CreateTable.prototype.execute = createTableMock;
    const saveFileMock = jest.fn().mockReturnValue(true);
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run({ ...options, showTable: true });
    expect(logMock).toHaveBeenCalledTimes(3);
    expect(logMock).toHaveBeenCalledWith("Server is running...");
    expect(logMock).toHaveBeenCalledWith("mocked table");

    expect(createTableMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });

    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      destination: options.destination,
      fileName: options.name,
    });
  });
});
