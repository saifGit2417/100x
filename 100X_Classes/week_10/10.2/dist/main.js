"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// create user function
function insertUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, password, firstName, lastName, age, }) {
        const result = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
                age,
            },
        });
        return result;
    });
}
// to read all the data from te db
function findAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user.findMany();
        return result;
        //   console.log("all entries ", result);
    });
}
// update user function
function updateUser(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { password, firstName, lastName, age }) {
        const result = yield prisma.user.update({
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
    });
}
// delete all data from user table function
function deleteAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user.deleteMany();
        return result;
        //   console.log("all data deleted  ", result);
    });
}
const newUser = {
    email: "saif1@example.com",
    password: "saif1",
    firstName: "saif1",
    lastName: "ur rahmna",
    age: 23,
};
const updateUserObj = {
    email: "updated email",
    password: "updated password",
    firstName: "updated firstName",
    lastName: "updated lastName",
    age: 999999,
};
// Call the insertUser function with the user object
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
// get Api to fetch all details of users
app.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield findAllData();
        res.send(result);
    }
    catch (error) {
        console.log("get all data api ", error);
    }
}));
// api to post new user
app.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userObj = req.body;
    try {
        let userCreated = yield insertUser(userObj);
        if (userCreated) {
            res.send(`user created successfully , user id is ${userCreated.id}`);
        }
    }
    catch (error) {
        console.log("insert data api call ", error);
    }
}));
// api to update existing user
app.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.id;
        const updateUserObj = req.body;
        let result = yield updateUser(userId, updateUserObj);
        if (result) {
            res.send(result);
        }
    }
    catch (error) {
        console.log("update api error: ", error);
    }
}));
// api to delete all entries from table
app.delete("/deleteAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield deleteAllData();
        if (result) {
            res.send(`all data has been deleted successfully`);
        }
    }
    catch (error) {
        console.log("delete api error: ", error);
    }
}));
app.listen(3899, () => {
    console.log("port running at 3899");
});
