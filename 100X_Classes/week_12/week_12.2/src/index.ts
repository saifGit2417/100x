/*how to use interfaces in type script interfaces */

interface User {
  age: number;
  name: string;
}

function userDetails(user1: User, user2: User) {
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

// console.log("userDetails: ", userDetails(user1, user2));
// console.log("userDetails: ", userDetails(user1, user2));

/*Pick some of the properties from existing interfaces using PICK API of type script*/

interface UserDetails {
  name: string;
  age: number;
  email: string;
  password: string;
  address: string;
}

type UpdateUser = Pick<UserDetails, "name" | "email">;

function updateUser(data: UpdateUser) {
  return `details which needs to be updated are name:${data.name} and email:${data.email}`;
}

let updateData = {
  name: "updated name",
  email: "i am updated email",
};
console.log(updateUser(updateData));

/*using READ-ONLY properties of type script so no one can override existing values which we provide*/

interface ApiDetails {
  readonly endPoint: string;
}

interface NormalApiCall {
  endPoint: string;
}

function apiCall(apiObj: ApiDetails) {
  //    apiObj.endPoint += " additional to api end point";
  //    this is not allowed while using interfaces which uses read only attributes while defining the interfaces

  console.log(apiObj.endPoint);
}

let apiCallObj = {
  endPoint: "i am original api end point",
};

apiCall(apiCallObj);

/* when to use record and map , consider below examples*/
interface UserNew {
  id: string;
  name: string;
}

type UsersNew = { [key: string]: UserNew };

// below is cleaner way to write data type in type script
type RecordUsers = Record<string, UserNew>;

let dataObj: RecordUsers = {
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

/* consider you want to stop user from doing certain actions , exclude it ,below is the way to do it*/

type Arithmetic = "addition" | "subtraction" | "multiply" | "divide";
function performAllOperations(operation: Arithmetic) {
  return operation;
}
console.log("performAllOperations: ", performAllOperations("divide"));

// imagine you want to exclude some operation

type ExcludeArithmetic = Exclude<Arithmetic, "divide">;
function performExcludedArithmetic(operation: ExcludeArithmetic) {
  return operation;
}
// below function can perform all other action other than doing divide
console.log(
  "performExcludedArithmetic: ",
  performExcludedArithmetic("multiply")
);

// ḥow we can verify data type on run time using zod library

