"use strict";
// const { uuidv4 } = require("../plugins/uuid.plugin");
// const { getAge } = require("../plugins/get-age.plugin");
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ uuidv4, getAge }) => {
    return ({ name, birthdate, city }) => {
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
exports.buildMakePerson = buildMakePerson;
// const Juanito = buildPerson(obj);
// console.log(Juanito);
// module.exports = { buildMakePerson };
//# sourceMappingURL=05-factory.js.map