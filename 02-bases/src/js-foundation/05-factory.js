const { uuidv4 } = require("../../plugins/uuid.plugin");
const { getAge } = require("../../plugins/get-age.plugin");

const obj = { name: "John", birthdate: "1985-03-25", city: "New York" };

const buildPerson = ({ name, birthdate, city }) => {
  return {
    // id: new Date().getTime(),
    id: uuidv4(),
    name,
    birthdate,
    // age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    age: getAge(birthdate),
    city,
  };
};

const Juanito = buildPerson(obj);

console.log(Juanito);
