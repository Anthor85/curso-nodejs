"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: "Alice",
    },
    {
        id: 2,
        name: "Bob",
    },
];
const getUserById = (id, callback) => {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (callback) {
        callback(user ? null : new Error("User not found"), user);
    }
    else {
        console.log(user);
    }
};
exports.getUserById = getUserById;
// module.exports = {
//   getUserById,
// };
//# sourceMappingURL=03-callbacks.js.map