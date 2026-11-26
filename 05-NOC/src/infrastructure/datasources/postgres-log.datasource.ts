import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeveritiyLevel } from "../../domain/entities/log.entity";
import { db } from "../../prisma/db";

export class PostgresLogDatasource implements LogDatasource {
  private transformLevel(level: LogSeveritiyLevel) {
    return level.toUpperCase() as "LOW" | "MEDIUM" | "HIGH";
  }

  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await db.orm.public.LogModel.create({
      ...log,
      level: this.transformLevel(log.level),
    });
    console.log("Postgres Log created:", newLog.id);
  }

  async getLogs(severityLevel: LogSeveritiyLevel): Promise<LogEntity[]> {
    const logs = await db.orm.public.LogModel.where({
      level: this.transformLevel(severityLevel),
    }).all();
    console.log("Logs recovered", logs);
    return logs.map((log) => LogEntity.fromObject(log));
  }
}
