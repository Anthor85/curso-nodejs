import { uuidv4 } from '../plugins/uuid.plugin';
import { getAge } from '../plugins/get-age.plugin';
// const { uuidv4 } = require("../plugins/uuid.plugin");
// const { getAge } = require("../plugins/get-age.plugin");

// const obj = { name: "John", birthdate: "1985-03-25", city: "New York" };

interface Options {
  uuidv4: () => string;
  getAge: (birthdate: string) => number;
}

interface UserData {
  name: string;
  birthdate: string;
  city: string;
}

export const buildMakePerson = ({ uuidv4, getAge }: Options) => {
  return ({ name, birthdate, city }: UserData) => {
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
};

// const Juanito = buildPerson(obj);

// console.log(Juanito);

// module.exports = { buildMakePerson };
