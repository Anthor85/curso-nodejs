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
  const user = users.find((user) => user.id === id);

  if (callback) {
    callback(user ? null : new Error("User not found"), user);
  } else {
    console.log(user);
  }
}

module.exports = {
  getUserById,
};
