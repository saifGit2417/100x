// // // Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

// let array1 = [1, 2, 3, 4, 5];
// let directFunction = (array, callBack) => {
//   let emptyArr = [];
//   for (let i = 0; i < array.length; i++) {
//     let result = callBack(array[i]);
//     emptyArr.push(result);
//   }
//   return emptyArr;
// };

// let callBackFunction = (element) => {
//   return element + " i am new variable";
// };

// console.log(directFunction(array1, callBackFunction));

// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

// const filterOddNumbers = (array) => {
//   let oddNumbersArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddNumbersArray.push(array[i]);
//     }
//   }
//   return oddNumbersArray;
// };

// console.log(filterOddNumbers([1, 2, 3, 4, 5]));

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleItems = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const doubleInteger = 2 * array[i];
    newArray.push(doubleInteger);
  }
  return newArray;
};

console.log(doubleItems(array));

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.

const asynchronousOperations = () => {
  setTimeout(() => {
    console.log("first");
  }, 2000);
};

asynchronousOperations();

// Question-6:  WAP to perform read and write operation in a text file in JS.

const fs = require("fs");

// Function to read the contents of a text file
function readTextFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    console.log(`Contents of ${filePath}:\n${fileContent}`);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
}

// Function to write text to a file
function writeTextFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Successfully wrote to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error.message);
  }
}

// Example usage:
const filePath = "Question1.txt";

// Read the contents of the file
readTextFile(filePath);

// Write new content to the file
const newContent = "This is a new line of text.";
writeTextFile(filePath, newContent);

// Read the contents again to verify the changes
readTextFile(filePath);
