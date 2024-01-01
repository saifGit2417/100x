// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

const arithmetic = (num1, num2) => {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
};
arithmetic(10, 20);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

const compareNumbers = (num1, num2) => {
  if (num1 === num2) {
    return `${num1} is equal to ${num2} `;
  } else if (num1 > num2) {
    return `${num1} is greater  than ${num2} `;
  } else if (num1 < num2) {
    return `${num1} is lesser  than ${num2} `;
  }
};
console.log(compareNumbers(10, 20));
console.log(compareNumbers(40, 20));
console.log(compareNumbers(40, 40));

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
const useTernary = (num1, num2) => {
  return num1 > num2
    ? `${num1} is  greater than${num2}`
    : `${num1} is  lesser than${num2}`;
};
console.log(useTernary(10, 20));
console.log(useTernary(40, 20));

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.
const concatenateString = (str1, str2) => {
  return str1 + " " + str2;
};
console.log("concatenateString: ", concatenateString("md", "saif"));

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

let person1 = {
  fname: "md saif",
  age: 21,
};

const checkPropertyOf = (obj, property) => {
  if (obj.hasOwnProperty(property)) {
    return `${property} exists in ${JSON.stringify(obj)}`;
  } else {
    return `${property} does not exists in ${JSON.stringify(obj)}`;
  }
};

console.log("checkPropertyOf: ", checkPropertyOf(person1, "fname"));
console.log("checkPropertyOf: ", checkPropertyOf(person1, "gender"));
