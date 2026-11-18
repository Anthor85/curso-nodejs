import { LogEntity, LogSeveritiyLevel } from "../entities/log.entity";

export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeveritiyLevel): Promise<LogEntity[]>;
}
