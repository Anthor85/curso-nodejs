const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
  if (!birthdate) return new Error("Birthdate is required");

  const age = getAgePlugin(birthdate);
  return age;
};

module.exports = { getAge };
