// const { emailTemplate } = require("./js-foundation/01-template.js");
// /*const { name } = */ require("./js-foundation/02-destructuring.js");
// const { getUserById } = require("./src/js-foundation/03-callbacks.js");
const { getUserById } = require("./src/js-foundation/04-arrows.js");

const id = 3;

getUserById(id, (error, user) => {
  if (error) {
    throw new Error("User not found", id);
  } else {
    console.log(`User found: ${user.name}`);
  }
});

// console.log('Hello, World!');

// console.log(emailTemplate);
