// const winston = require("winston");
import winston from "winston";
const { combine, timestamp, json, printf } = winston.format;

// const myFormat = printf(({ level, message, timestamp, service }) => {
//   return `${timestamp} [${service}] ${level}: ${message}`;
// });

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp(),
    json(),
    // myFormat,
  ),
  // defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Agregar transporte para consola en entornos no productivos
// if (process.env.NODE_ENV !== "production") {
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);
// }

// module.exports = function buildLogger(service) {
export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log("info", { message, service });
    },
    error: (message: string) => {
      logger.log("error", { message, service });
    },
  };
};
