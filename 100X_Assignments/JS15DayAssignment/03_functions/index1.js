// // Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

// const greet = (name) => {
//   return `Hi ${name}`;
// };
// greet("saif");
// console.log('greet("saif"): ', greet("saif"));

// // Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(1, 2));

// // Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

// const greetOnTime = (time) => {
//   // consider having time in 24 hour format
//   if ((time) => 0 && time <= 24) {
//     if (time >= 0 && time < 12) {
//       return "Good Morning";
//     } else if (time >= 12 && time <= 19) {
//       return "Good Evening ";
//     } else {
//       return "good night";
//     }
//   }
// };

// console.log(greetOnTime(24));
// console.log(greetOnTime(19));
// console.log(greetOnTime(0));

// // Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

// function isPrime(number) {
//   // Check for numbers less than 2 (not prime)
//   if (number < 2) {
//     return false;
//   }

//   // Check for divisibility by numbers from 2 to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     console.log(i);
//     if (number % i === 0) {
//       return false; // Number is divisible by i, so it's not prime
//     }
//   }

//   return true; // If no divisors found, the number is prime
// }

// console.log(isPrime(5));

// // Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

// const localFunc = () => {
//   let name = "md saif";
//   return `username is ${name}`;
// };

// localFunc();
// console.log("localFunc(): ", localFunc());

// let globalVar = "md sohel";

// const globalFunc = () => {
//   return `username is ${globalVar}`;
// };
// console.log("globalFunc: ", globalFunc());

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

function outerFunction() {
  let greetings = "Good Morning , have a good day";
  function innerFunction() {
    return greetings;
  }
  return innerFunction();
}

outerFunction();
console.log(" outerFunction(): ", outerFunction());

// Question-9:  Write a recursive function to calculate the factorial of a given number.
function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  } else {
    // Recursive case: factorial of n is n times factorial of (n-1)
    return n * factorial(n - 1);
  }
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);

function recursiveSum(number) {
  let sum = 0;
  for (let i = number; i >= 0; i--) {
    sum += i;
  }
  return sum;
}
function recursiveMultiply(number) {
  let multiple = 1;
  for (let i = number; i >= 1; i--) {
    multiple *= i;
  }
  return multiple;
}

console.log("recursiveSum(5);: ", recursiveSum(5));
console.log(recursiveMultiply(5))
