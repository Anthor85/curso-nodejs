import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    default: 1,
    describe: "Mutiplication table base",
    // demandOption: true
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show Multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File Name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "src/outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "Error: base debe ser mayor que 0";
    return true;
  })
  .parseSync();
