import nodemailer from "nodemailer";
import { envs } from "../../config/env.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeveritiyLevel } from "../../domain/entities/log.entity";

interface Attachment {
  filename: string;
  path: string;
}

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor(
    // private readonly logRepository: LogRepository
  ) {}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody: html, attachments = [] } = options;
    try {
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html,
        attachments,
      });

      const log = new LogEntity({
        level: LogSeveritiyLevel.low,
        message: "Email sent",
        origin: "email.service.ts",
      });
      // this.logRepository.saveLog(log);

      return true;
    } catch (error) {
      const log = new LogEntity({
        level: LogSeveritiyLevel.high,
        message: "Email not sent",
        origin: "email.service.ts",
      });
      // this.logRepository.saveLog(log);

      console.error(error);
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = "Logs del servidor";
    const htmlBody = `
      <h3>Logs de sistema - NOC</h3>
      <p>Ver los adjuntos</p>
    `;

    const attachments: Attachment[] = [
      {
        filename: "logs-all.log",
        path: "logs\\logs-all.log",
      },
      {
        filename: "logs-high.log",
        path: "logs\\logs-high.log",
      },
      {
        filename: "logs-medium.log",
        path: "logs\\logs-medium.log",
      },
    ];

    return this.sendEmail({
      to,
      subject,
      attachments,
      htmlBody,
    });
  }
}
