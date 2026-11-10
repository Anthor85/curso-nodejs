import { User } from "./03-callbacks";

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
  const user = users.find((user) => user.id === id);

  if (callback) {
    callback(user ? null : new Error("User not found"), user);
  }
};

// module.exports = {
//   getUserById,
// };
