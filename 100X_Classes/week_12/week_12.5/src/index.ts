import { PrismaClient } from "@prisma/client";

// Instantiate Prisma Client
const prisma = new PrismaClient();
interface AddUser {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

async function addNewUser({
  username,
  firstName,
  lastName,
  password,
}: AddUser) {
  try {
    let addNewEntry = await prisma.user.create({
      data: {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
      },
    });
    console.log("addNewEntry: ", addNewEntry);
  } catch (error) {
    console.log("error: ", error);
  }
}

let newUserObj = {
  username: "prisma user 1",
  lastName: "prisma Last name",
  firstName: "prisma first name",
  password: "prisma password",
};
// addNewUser(newUserObj);

async function deleteAll() {
  let result = await prisma.user.deleteMany();
  console.log(result);
}

deleteAll();
