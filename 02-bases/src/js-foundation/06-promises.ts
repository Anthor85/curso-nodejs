export const getPokemonById = (id: number) => {
  return (
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      // .then(() => {throw new Error("Pokemon not found")})
      .then((data) => data)
  );
};

// module.exports = getPokemonById;
