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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// Instantiate Prisma Client
const prisma = new client_1.PrismaClient();
function addNewUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, firstName, lastName, password, }) {
        try {
            let addNewEntry = yield prisma.user.create({
                data: {
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                },
            });
            console.log("addNewEntry: ", addNewEntry);
        }
        catch (error) {
            console.log("error: ", error);
        }
    });
}
let newUserObj = {
    username: "prisma user 1",
    lastName: "prisma Last name",
    firstName: "prisma first name",
    password: "prisma password",
};
// addNewUser(newUserObj);
function deleteAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield prisma.user.deleteMany();
        console.log(result);
    });
}
deleteAll();
