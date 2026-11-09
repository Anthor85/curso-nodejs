"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
// const axios = require("axios");
const axios_1 = __importDefault(require("axios"));
exports.httpClient = {
    getUrl: async (url) => {
        //   return await fetch(url)
        const { data } = await axios_1.default.get(url);
        return data;
        // .then((response) => response)
        // .then((data) => data);
    },
};
// module.exports = { httpClient };
//# sourceMappingURL=http-client.plugin.js.map