import { CreateTable } from "../../../src/domain/use-cases/create-table.use-case";

describe("Create Table Use Case", () => {
  test("should create a table with default values", () => {
    // Arrange
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 1 });
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("1 x 1 = 1");
    expect(table.split("\n").length).toBe(13); // 10 rows + header + footer
  });
  test("should create a table with custom values", () => {
    // Arrange
    const options = {
      base: 2,
      limit: 5,
    };
    const table = new CreateTable().execute(options);
    expect(table).toContain("2 x 1 = 2");
    expect(table.split("\n").length).toBe(8); // 5 rows + header + footer
  });
});
