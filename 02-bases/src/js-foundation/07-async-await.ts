// const { httpClient } = require("../plugins");
import { httpClient } from "../plugins";

export const getPokemonById = async (id: number) => {
  return await httpClient.getUrl(`https://pokeapi.co/api/v2/pokemon/${id}`);
  // const data = await response.json();
  // return data;
};

// module.exports = getPokemonById;
