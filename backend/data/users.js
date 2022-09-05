import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Zaf",
    email: "zafar@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "test",
    email: "test@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
