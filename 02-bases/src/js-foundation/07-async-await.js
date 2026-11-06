const { httpClient } = require("../../plugins");

const getPokemonById = async (id) => {


  return await httpClient.getUrl(`https://pokeapi.co/api/v2/pokemon/${id}`);
  // const data = await response.json();
  // return data;
};

module.exports = getPokemonById;
