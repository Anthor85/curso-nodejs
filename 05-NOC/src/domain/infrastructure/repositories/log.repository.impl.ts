import { LogEntity, LogSeveritiyLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { LogDatasource } from "../../datasources/log.datasource";

export class LogRepositoryImpl implements LogRepository {
  //Inyección de dependencias en el constructor. Equivale a declarar const fuera
  constructor(private readonly logDatasource: LogDatasource) {}

  async saveLog(log: LogEntity): Promise<void> {
    this.logDatasource.saveLog(log);
  }

  async getLogs(severityLevel: LogSeveritiyLevel): Promise<LogEntity[]> {
    return this.logDatasource.getLogs(severityLevel);
  }
}
