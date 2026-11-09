"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
// const { httpClient } = require("../plugins");
const plugins_1 = require("../plugins");
const getPokemonById = async (id) => {
    return await plugins_1.httpClient.getUrl(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // const data = await response.json();
    // return data;
};
exports.getPokemonById = getPokemonById;
// module.exports = getPokemonById;
//# sourceMappingURL=07-async-await.js.map