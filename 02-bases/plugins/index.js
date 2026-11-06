const { uuidv4 } = require("./uuid.plugin");
const { getAge } = require("./get-age.plugin");
const { httpClient } = require("./http-client.plugin");

module.exports = {
  uuidv4,
  getAge,
  httpClient,
};
