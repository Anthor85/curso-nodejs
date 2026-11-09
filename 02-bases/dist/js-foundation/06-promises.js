"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const getPokemonById = (id) => {
    return (fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        // .then(() => {throw new Error("Pokemon not found")})
        .then((data) => data));
};
exports.getPokemonById = getPokemonById;
// module.exports = getPokemonById;
//# sourceMappingURL=06-promises.js.map