// const getAgePlugin = require("get-age");

export const getAge = (birthdate: string) => {
  // if (!birthdate) return new Error("Birthdate is required");

  // const age = getAgePlugin(birthdate);
  // return age;
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};

module.exports = { getAge };
