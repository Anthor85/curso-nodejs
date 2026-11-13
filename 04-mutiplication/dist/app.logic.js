"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const base = 27;
const array = [
    `
=========================
       Tabla del ${base}
=========================
  `,
];
const directory = "src/outputs";
for (let index = 1; index <= 10; index++) {
    array.push(`${base} x ${index} = ${base * index}`);
}
fs_1.default.writeFileSync(`${directory}/tabla-${base}.txt`, array.join("\n"));
console.log(array);
//# sourceMappingURL=app.logic.js.map