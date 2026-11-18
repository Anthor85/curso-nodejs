import { FileSystemDatasource } from "../domain/infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../domain/infrastructure/repositories/log.repository.impl";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(), //Aquí podemos poner cualquier Datasource que creemos (Mongo, Postgre...)
);

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
        fileSystemLogRepository,
        () => console.log("Servicio ok"),
        () => console.error("Servicio falló"),
      ).execute("http://www.google.come");
      //  new CheckService().execute('http://localhost:3000/posts');
    });
  }
}
