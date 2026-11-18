import fs from "fs";
import { LogDatasource } from "../../datasources/log.datasource";
import { LogEntity, LogSeveritiyLevel } from "../../entities/log.entity";

export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "logs";
  private allLogsPath = "logs/logs-all.log";
  private mediumLogsPath = "logs/logs-medium.log";
  private highLogsPath = "logs/logs-high.log";

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(
      (filePath) => !fs.existsSync(filePath) && fs.writeFileSync(filePath, ""),
    );
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;
    fs.appendFileSync(this.allLogsPath, logAsJson);
    switch (newLog.level) {
      case LogSeveritiyLevel.low:
        break;
      case LogSeveritiyLevel.medium:
        fs.appendFileSync(this.mediumLogsPath, logAsJson);
        break;
      case LogSeveritiyLevel.high:
        fs.appendFileSync(this.highLogsPath, logAsJson);
        break;
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, "utf-8");
    const logs = content.split("\n").map(LogEntity.fromJson);

    return logs;
  };

  async getLogs(severityLevel: LogSeveritiyLevel): Promise<LogEntity[]> {
    switch (severityLevel) {
      case LogSeveritiyLevel.low:
        return this.getLogsFromFile(this.allLogsPath);
      case LogSeveritiyLevel.medium:
        return this.getLogsFromFile(this.mediumLogsPath);
      case LogSeveritiyLevel.high:
        return this.getLogsFromFile(this.highLogsPath);
      default:
        throw new Error(`${severityLevel} not implemented`);
    }
  }
}
