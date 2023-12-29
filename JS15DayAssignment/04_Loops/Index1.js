// Question-1: WAP that logs numbers from 1 to 10 to the console.
const logNumber1To10 = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};
logNumber1To10();

// Question-2: WAP that log all even numbers from 2 to 20.
const print2to20EvenNumber = () => {
  for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
print2to20EvenNumber();

// Question-3: WAP that counts backward from 10 to 1 and logs the values.
const logBackwards10To1 = () => {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
};
logBackwards10To1();

// Question-4: WAP to calculate the sum of numbers from 1 to 5.
const sum1To5 = () => {
  let totalSum = 0;
  for (let i = 1; i <= 5; i++) {
    totalSum += i;
  }
  return totalSum;
};
console.log("sum1To5(): ", sum1To5());

// Question-5: WAP that prints powers of 2 (2^n) up to 64.
const printUpto64 = () => {
  let resultArray = [];
  for (let i = 1; i <= 100; i++) {
    const result = Math.pow(2, i);
    if (result <= 64) {
      resultArray.push(result);
    }
  }
  return resultArray;
};
console.log("printUpto64(): ", printUpto64());

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

const numberGuessingGame = () => {
  const targetNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let userGuess;
  let attempts = 0;

  do {
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    if (isNaN(userGuess)) {
      console.log("Please enter a valid number.");
    } else {
      attempts++;

      if (userGuess === targetNumber) {
        console.log(
          `Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`
        );
      } else {
        console.log("Incorrect guess. Try again!");
      }
    }
  } while (userGuess !== targetNumber);
};

// Call the function to start the number guessing game
// numberGuessingGame();

// Question-7: WAP to display the multiplication table (1 to 10) in the console.
const multiplicationTable = () => {
  for (let integer = 1; integer <= 10; integer++) {
    console.log(`Table of ${integer}`);
    for (let tableOf = 1; tableOf <= 10; tableOf++) {
      console.log(integer * tableOf);
    }
  }
};

multiplicationTable();

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
const breakAndContinue = () => {
  for (let i = 0; i <= 5; i++) {
    if (i === 3) continue;
    if (i === 5) break;
    console.log(i);
  }
};
// breakAndContinue();

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

const multipleOf3And5 = () => {
  let numberOfArray = [];
  for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      numberOfArray.push("FizzBuzz " + number);
    } else if (number % 3 === 0) {
      numberOfArray.push("Fizz " + number);
    } else if (number % 5 === 0) {
      numberOfArray.push("Buzz " + number);
    } else {
      numberOfArray.push(number);
    }
  }
  console.log(numberOfArray);
};

multipleOf3And5();

// Question-10: WAP to identify and log prime numbers within a given range.
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findPrimesInRange = (start, end) => {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  console.log(
    `Prime numbers between ${start} and ${end}: ${primes.join(", ")}`
  );
};

findPrimesInRange(1, 30);
