import { v4 as uuidv4Plugin } from "uuid";
// const { v4: uuidv4Plugin } = require("uuid");

export const uuidv4 = () => {
  return uuidv4Plugin();
};

// module.exports = { uuidv4 };
