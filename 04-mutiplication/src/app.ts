import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// Ej.1
// console.log(process.argv);
// const [tsnode, app, ...args] = process.argv;
// console.log(args);

// Ej.2
// console.log(yarg.d);

// Ej.3
(async () => {
  await main();
  console.log("Finalizado");
})();

async function main() {
  const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;
  // console.log(yarg.destination);
  ServerApp.run({
    base,
    limit,
    showTable,
    name,
    destination,
  });
}
