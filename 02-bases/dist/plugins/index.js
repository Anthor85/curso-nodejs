"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.httpClient = exports.getAge = exports.uuidv4 = void 0;
var uuid_plugin_1 = require("./uuid.plugin");
Object.defineProperty(exports, "uuidv4", { enumerable: true, get: function () { return uuid_plugin_1.uuidv4; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClient", { enumerable: true, get: function () { return http_client_plugin_1.httpClient; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
// const { uuidv4 } = require("./uuid.plugin");
// const { getAge } = require("./get-age.plugin");
// const { httpClient } = require("./http-client.plugin");
// const buildLogger = require("./logger.plugin");
// module.exports = {
//   uuidv4,
//   getAge,
//   httpClient,
//   buildLogger,
// };
//# sourceMappingURL=index.js.map