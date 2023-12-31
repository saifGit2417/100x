console.log("hello world");

const greetPerson = (firstName, lastName) => {
  return `Good morning ${firstName} ${lastName}`;
};
console.log("greetPerson: ", greetPerson("md", "saif"));

const greetBYGender = (gender, name) => {
  let greetingMsg = ``;
  if (gender === "Male" || gender === "MALE" || gender === "male") {
    greetingMsg = `Good Morning Mr ${name} `;
  } else {
    greetingMsg = `Good Morning Mrs ${name} `;
  }

  return greetingMsg;
};
console.log(greetBYGender("male", "saif"));
console.log(greetBYGender("female", "saif"));

const print0To100 = () => {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
};
print0To100();

let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumberFromArray = (arr) => {
  let cloneArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      cloneArray.push(arr[i]);
    }
  }
  return cloneArray;
};

console.log(printOddNumberFromArray(arrayNumbers));

const findBiggestNumberInArray = (arr) => {};

const allUsers = [
  { name: "md saif", gender: "male" },
  { name: "md arif", gender: "male" },
  { name: "priya", gender: "female" },
];
console.log("allUsers: ", allUsers.length);

for (let i = 0; i < allUsers.length; i++) {
  console.log(allUsers[i]);
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["name"]);
  }
}

const findSum = (num1, num2) => {
  return num1 + num2;
};

console.log("findSum: ", findSum(109, 7));

function parentFunction(child) {
  return child();
}

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
sum(10, 45, displayResult);
sum(10, 45, displayResultPassive);

function parentFn(childFn) {
  return childFn();
}

function child1() {
  console.log("i ma child 1");
}
function child2() {
  console.log("i ma child 2");
}
function child3() {
  console.log("i ma child 3");
}

parentFn(child1);
parentFn(child2);
parentFn(child3);

function arithmetic(num1, num2, process) {
  return process(num1, num2);
}

const add = (num1, num2) => {
  console.log(num1 + num2);
};
const sub = (num1, num2) => {
  console.log(num1 - num2);
};

arithmetic(10, 20, add);
arithmetic(10, 20, sub);

const person = {
  name: "md saif",
  age: 21,
};

console.log(person.name);
console.log(person["name"]);

console.log(4 + true);

console.log(true - 5);
console.log(false - 5);
