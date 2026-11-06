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

function getUserById(id, callback) {
  const user = users.find(function(user) {
    return user.id === id;
  });

  if (callback) {
    callback(user ? null : new Error("User not found"), user);
  } else {
    console.log(user);
  }
}

module.exports = {
  getUserById,
};
