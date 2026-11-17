import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");

    CronService.createJob("*/5 * * * * *", () => {
      // console.log(
      //   "2 second",
      //   new Date().toLocaleString("en-US", {
      //     timeZone: "America/Los_Angeles",
      //   }),
      // );
      new CheckService(
        () => console.log("Servicio ok"),
        () => console.error("Servicio falló")
      ).execute("http://www.google.com");
      //  new CheckService().execute('http://localhost:3000/posts');
    });
  }
}
