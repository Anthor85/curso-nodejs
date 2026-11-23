// import "dotenv/config";
import { Server } from "./presentation/server";
import { envs } from "./config/env.plugin";

(async () => {
  main();
})();

function main() {
  Server.start();
  // console.log({email: process.env.MAILER_EMAIL})
  console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
}
