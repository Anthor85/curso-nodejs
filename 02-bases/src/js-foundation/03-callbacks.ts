export interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
];

export const getUserById = (
  id: number,
  callback: (error: Error | null, user?: User) => void,
) => {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (callback) {
    callback(user ? null : new Error("User not found"), user);
  } else {
    console.log(user);
  }
};

// module.exports = {
//   getUserById,
// };
