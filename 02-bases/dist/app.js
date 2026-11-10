"use strict";
// const { emailTemplate } = require("./js-foundation/01-template.js");
// /*const { name } = */ require("./js-foundation/02-destructuring.js");
// const { getUserById } = require("./src/js-foundation/03-callbacks.js");
// const { getUserById } = require("./src/js-foundation/04-arrows.js");
Object.defineProperty(exports, "__esModule", { value: true });
const _04_arrow_1 = require("./js-foundation/04-arrow");
const _05_factory_1 = require("./js-foundation/05-factory");
const _07_async_await_1 = require("./js-foundation/07-async-await");
const plugins_1 = require("./plugins");
const id = 1;
(0, _04_arrow_1.getUserById)(id, (error, user) => {
    if (error) {
        throw new Error(`User not found ${id}`);
    }
    else {
        console.log(`User found: ${user?.name}`);
    }
});
// console.log('Hello, World!');
// console.log(emailTemplate);
// const { buildMakePerson } = require("./js-foundation/05-factory.js");
// const { uuidv4, getAge } = require("../plugins");
const makePerson = (0, _05_factory_1.buildMakePerson)({ uuidv4: plugins_1.uuidv4, getAge: plugins_1.getAge });
const john = { name: "John", birthdate: "1985-03-25", city: "New York" };
const johnMade = makePerson(john);
console.log(johnMade);
// const getPokemonById = require("./js-foundation/06-promises.js");
// const getPokemonById = require("./js-foundation/07-async-await.js");
// const { buildLogger } = require("./plugins");
// const logger = buildLogger("app.js");
// logger.error("Hola mundo mortal");
console.log((0, _07_async_await_1.getPokemonById)(21)
    .then((pokemon) => {
    console.log(`Pokemon found: ${pokemon.name}`);
})
    .catch((error) => console.log(`Error: ${error.message}`)));
const name = "Paco Merme";
console.log(name);
//# sourceMappingURL=app.js.map