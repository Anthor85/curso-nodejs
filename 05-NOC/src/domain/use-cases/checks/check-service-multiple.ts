import { LogEntity, LogSeveritiyLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceMultipleUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {
  constructor(
    private readonly logRepository: LogRepository[],
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback,
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        this.logRepository.map((repo) =>
          repo.saveLog(
            new LogEntity({
              message: `Error on check service ${url}`,
              level: LogSeveritiyLevel.high,
              origin: "check-service.ts",
            }),
          ),
        );
        throw new Error(`Error on check service ${url}`);
      }
      this.logRepository.map((repo) =>
        repo.saveLog(
          new LogEntity({
            message: `Service ${url} working`,
            level: LogSeveritiyLevel.low,
            origin: "check-service.ts",
          }),
        ),
      );
      this.successCallback && this.successCallback();
      return true;
    } catch (error) {
      this.logRepository.map((repo) =>
        repo.saveLog(
          new LogEntity({
            message: `${url} is not ok, ${error}`,
            level: LogSeveritiyLevel.high,
            origin: "check-service.ts",
          }),
        ),
      );
      this.errorCallback && this.errorCallback(`${error}`);

      console.error(error);
      return false;
    }
  }
}
