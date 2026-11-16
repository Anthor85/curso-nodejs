import fs from "fs";
import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case";

describe("Save File Use Case", () => {
  const options = {
    fileContent: "Hola mundillo feo",
    destination: "tests/mock/outputs",
    fileName: "test.txt",
  };
  afterEach(() => {
    fs.existsSync("src/outputs") &&
      fs.rmSync("src/outputs", { recursive: true });
    fs.existsSync(options.destination) &&
      fs.rmSync(options.destination, { recursive: true });
  });

  test("should save file with default values", () => {
    const filePath = "src/outputs/table.txt";
    const fileContent = "holaMundillo";
    const saveFile = new SaveFile();
    const fileSaved = saveFile.execute({ fileContent });
    expect(saveFile).toBeInstanceOf(SaveFile);
    const checkFile = fs.existsSync(filePath);
    const fileContentRead = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(checkFile).toBe(true);
    expect(fileContentRead).toBe(fileContent);
    expect(fileSaved).toBe(true);
  });
  test("should save file with custom values", () => {
    const fileSaved = new SaveFile().execute(options);
    const checkFile = fs.existsSync(
      `${options.destination}/${options.fileName}`,
    );
    const fileContentRead = fs.readFileSync(
      `${options.destination}/${options.fileName}`,
      {
        encoding: "utf-8",
      },
    );

    expect(checkFile).toBe(true);
    expect(fileContentRead).toBe(options.fileContent);
    expect(fileSaved).toBe(true);
  });

  test("should return false when mkdirSync fails", () => {
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("Error gordo");
    });
    const result = new SaveFile().execute(options);
    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test("should return false when writeFileSync fails", () => {
    const writeFileSyncSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("Error gordo");
      });
    const result = new SaveFile().execute({ fileContent: "patata" });
    expect(result).toBe(false);

    writeFileSyncSpy.mockRestore();
  });
});
