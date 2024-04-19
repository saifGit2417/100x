"use strict";
/*how to use interfaces in type script interfaces */
function userDetails(user1, user2) {
    return user1.age + user2.age;
}
let user1 = {
    age: 21,
    name: "md saif",
};
let user2 = {
    age: 23,
    name: "md sohel",
};
function updateUser(data) {
    return `details which needs to be updated are name:${data.name} and email:${data.email}`;
}
let updateData = {
    name: "updated name",
    email: "i am updated email",
};
console.log(updateUser(updateData));
function apiCall(apiObj) {
    //    apiObj.endPoint += " additional to api end point";
    //    this is not allowed while using interfaces which uses read only attributes while defining the interfaces
    console.log(apiObj.endPoint);
}
let apiCallObj = {
    endPoint: "i am original api end point",
};
apiCall(apiCallObj);
let dataObj = {
    obj1: {
        name: "md saif",
        id: "21",
    },
    obj2: {
        name: "md sohel",
        id: "26",
    },
};
console.log(dataObj);
function performAllOperations(operation) {
    return operation;
}
console.log("performAllOperations: ", performAllOperations("divide"));
function performExcludedArithmetic(operation) {
    return operation;
}
// below function can perform all other action other than doing divide
console.log("performExcludedArithmetic: ", performExcludedArithmetic("multiply"));
// ḥow we can verify data type on run time using zod library
