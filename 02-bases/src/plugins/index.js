const { uuidv4 } = require("./uuid.plugin");
const { getAge } = require("./get-age.plugin");
const { httpClient } = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");

module.exports = {
  uuidv4,
  getAge,
  httpClient,
  buildLogger,
};
