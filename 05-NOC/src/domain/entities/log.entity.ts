export enum LogSeveritiyLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeveritiyLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeveritiyLevel; //Enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.message = message;
    this.level = level;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  static fromJson = (json: string): LogEntity => {
    json = json === "" ? "{}" : json;
    const { message, level, createdAt, origin } = JSON.parse(json);
    // if (!message) throw new Error('Message is required');

    return new LogEntity({ level, message, origin, createdAt });
  };

  static fromObject = (object: { [key: string]: any }): LogEntity => {
    const { message, level, createdAt, origin } = object;
    //Se pueden hacer Validaciones

    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin,
    });

    return log;
  };
}
