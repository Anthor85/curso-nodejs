"use strict";
// const getAgePlugin = require("get-age");
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    // if (!birthdate) return new Error("Birthdate is required");
    // const age = getAgePlugin(birthdate);
    // return age;
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
module.exports = { getAge: exports.getAge };
//# sourceMappingURL=get-age.plugin.js.map