import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeveritiyLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    console.log("Mongo Log created:", newLog.id);
  }



  async getLogs(severityLevel: LogSeveritiyLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({
      level: severityLevel,
    });
    console.log("Logs recovered", logs);
    return logs.map(log => LogEntity.fromObject(log));
  }
}
