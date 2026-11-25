import { LogSeveritiyLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
  // new FileSystemDatasource(), //Aquí podemos poner cualquier Datasource que creemos (Mongo, Postgre...)
  new MongoLogDatasource(),
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    //Mandar email de logs
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute(
    //   "antoniomacianmartinez@gmail.com",
    // );

    //Mandar email
    // const emailService = new EmailService(/* fileSystemLogRepository */);

    // Enviar logs
    // emailService.sendEmailWithFileSystemLogs([
    //   "ammlink@hotmail.com",
    //   "antoniomacianmartinez@gmail.com",
    // ]);

    // Enviar correo
    // emailService.sendEmail({
    //   to: "ammlink@hotmail.com",
    //   subject: "Logs del sistema",
    //   htmlBody: `
    //     <h3>Logs de sistema - NOC</h3>
    //     <p>Lorem leches</p>
    //     <p>Ver logs adjuntos</p>
    //     `,
    // });

    // const logs = logRepository.getLogs(LogSeveritiyLevel.high);
    // console.log(logs);

    // CronService.createJob("*/5 * * * * *", () => {
    //   //   // console.log(
    //   //   //   "2 second",
    //   //   //   new Date().toLocaleString("en-US", {
    //   //   //     timeZone: "America/Los_Angeles",
    //   //   //   }),
    //   //   // );
    //   new CheckService(
    //     logRepository,
    //     () => console.log("Servicio ok"),
    //     () => console.error("Servicio falló"),
    //   ).execute("http://www.google.com");
    //   //  new CheckService().execute('http://localhost:3000/posts');
    // });
  }
}
