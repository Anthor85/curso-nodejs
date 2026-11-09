"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = void 0;
// const winston = require("winston");
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json, printf } = winston_1.default.format;
// const myFormat = printf(({ level, message, timestamp, service }) => {
//   return `${timestamp} [${service}] ${level}: ${message}`;
// });
const logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    // defaultMeta: { service: "user-service" },
    transports: [
        new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "combined.log" }),
    ],
});
// Agregar transporte para consola en entornos no productivos
// if (process.env.NODE_ENV !== "production") {
logger.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
// }
// module.exports = function buildLogger(service) {
const buildLogger = (service) => {
    return {
        log: (message) => {
            logger.log("info", { message, service });
        },
        error: (message) => {
            logger.log("error", { message, service });
        },
    };
};
exports.buildLogger = buildLogger;
//# sourceMappingURL=logger.plugin.js.map