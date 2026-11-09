// console.log(process.env);

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script, PORT } = process.env;

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script, PORT });

const characters = ["Goku", "Vegeta", "Freezzer", "Trunks"];

// const [ _, __, trunks] = characters;
const [, , , trunks] = characters;
console.log(trunks);
