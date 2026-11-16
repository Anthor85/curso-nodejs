const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  console.log("process.argv", process.argv);
  const { yarg } = await import("../../../src/config/plugins/args.plugin.js");
  return yarg;
};

describe("Yarg plugin tests", () => {
  const originalArgv = process.argv;
  afterEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    // console.log(argv)

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "src/outputs",
      }),
    );
  });

  test("should return custom values", async () => {
    const argv = await runCommand([
      "-b",
      "5",
      "-l",
      "20",
      "-s",
      "-n",
      "myTable",
      "-d",
      "myDir",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 20,
        s: true,
        n: "myTable",
        d: "myDir",
      }),
    );
  });
});
