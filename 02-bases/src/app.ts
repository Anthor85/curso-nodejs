// const { emailTemplate } = require("./js-foundation/01-template.js");
// /*const { name } = */ require("./js-foundation/02-destructuring.js");
// const { getUserById } = require("./src/js-foundation/03-callbacks.js");
// const { getUserById } = require("./src/js-foundation/04-arrows.js");

import { getUserById } from "./js-foundation/04-arrow";
import { buildMakePerson } from "./js-foundation/05-factory";
import { getPokemonById } from "./js-foundation/07-async-await";
import { getAge, uuidv4 } from "./plugins";

const id = 1;

getUserById(id, (error, user) => {
  if (error) {
    throw new Error(`User not found ${id}`);
  } else {
    console.log(`User found: ${user?.name}`);
  }
});

// console.log('Hello, World!');

// console.log(emailTemplate);

// const { buildMakePerson } = require("./js-foundation/05-factory.js");
// const { uuidv4, getAge } = require("../plugins");

const makePerson = buildMakePerson({ uuidv4, getAge });
const john = { name: "John", birthdate: "1985-03-25", city: "New York" };
const johnMade = makePerson(john);
console.log(johnMade);

// const getPokemonById = require("./js-foundation/06-promises.js");
// const getPokemonById = require("./js-foundation/07-async-await.js");
// const { buildLogger } = require("./plugins");

// const logger = buildLogger("app.js");

// logger.error("Hola mundo mortal");

console.log(
  getPokemonById(21)
    .then((pokemon) => {
      console.log(`Pokemon found: ${pokemon.name}`);
    })
    .catch((error) => console.log(`Error: ${error.message}`)),
);

const name: string = "Paco Merme";
console.log(name);
