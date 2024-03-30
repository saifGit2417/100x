import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

interface CreateUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  age?: number;
}

interface UpdateUser {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
}

// create user function
async function insertUser({
  email,
  password,
  firstName,
  lastName,
  age,
}: CreateUser) {
  const result = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
      age,
    },
  });
  return result;
}

// to read all the data from te db
async function findAllData() {
  const result = await prisma.user.findMany();
  return result;
  //   console.log("all entries ", result);
}

// update user function
async function updateUser(
  id: any,
  { password, firstName, lastName, age }: UpdateUser
) {
  const result = await prisma.user.update({
    where: { id }, //by which you are trying to find where clause that should be unique to that table , in our case id is unique
    data: {
      password,
      firstName,
      lastName,
      age,
    },
  });
  return result;
  //   console.log("update result: ", result);
}

// delete all data from user table function
async function deleteAllData() {
  const result = await prisma.user.deleteMany();
  return result;
  //   console.log("all data deleted  ", result);
}

const newUser: CreateUser = {
  email: "saif1@example.com",
  password: "saif1",
  firstName: "saif1",
  lastName: "ur rahmna",
  age: 23,
};

const updateUserObj: UpdateUser = {
  email: "updated email",
  password: "updated password",
  firstName: "updated firstName",
  lastName: "updated lastName",
  age: 999999,
};

// insert function call
// insertUser(newUser); ///insert function call

// for demo purposes we can add 10 entries at same time using for loop , just add +1 to existing data obj
for (let i = 0; i < 10; i++) {
  let userObj = {
    email: "email",
    password: "password",
    firstName: "firstName",
    lastName: "lastName",
    age: 0,
  };
  userObj.email += " " + i;
  userObj.password += " " + i;
  userObj.firstName += " " + i;
  userObj.lastName += " " + i;
  userObj.age += i;
  // insertUser(userObj);
}

// if we want to delete all data to make table empty to practice
// deleteAllData(); //delete function call

// Call the updateUser function with the updateUserObj object
// check the id from db which we want to access id
// updateUser(54, updateUserObj); //update user function call

// Call the findAllData function
// findAllData(); //find all data function call


/*
C - create new user,
R - read all the users data from users table,
U - update user by using its id,
D - delete all users from users table

CRUD operations below 
*/

// get Api to fetch all details of users from users table
app.get("/getAll", async (req, res) => {
  try {
    let result = await findAllData();
    res.send(result);
  } catch (error) {
    console.log("get all data api ", error);
  }
});

// api to post new user
app.post("/add", async (req, res) => {
  const userObj = req.body;
  try {
    let userCreated = await insertUser(userObj);
    if (userCreated) {
      res.send(`user created successfully , user id is ${userCreated.id}`);
    }
  } catch (error) {
    console.log("insert data api call ", error);
  }
});

// api to update existing user
app.put("/update", async (req, res) => {
  try {
    const userId = req.query.id;
    const updateUserObj = req.body;

    let result = await updateUser(userId, updateUserObj);
    if (result) {
      res.send(result);
    }
  } catch (error) {
    console.log("update api error: ", error);
  }
});

// api to delete all entries from table
app.delete("/deleteAll", async (req, res) => {
  try {
    let result = await deleteAllData();
    if (result) {
      res.send(`all data has been deleted successfully`);
    }
  } catch (error) {
    console.log("delete api error: ", error);
  }
});

app.listen(3899, () => {
  console.log("port running at 3899");
});
