/*
Question-1: 

WAP to print this

*
**
***
****
*****  
*/

const printPattern = () => {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

// Call the function to print the pattern
printPattern();

/*
Question-4:

WAP to print this

1
12
123
1234
12345
*/

const print1To5 = () => {
  for (let i = 1; i <= 5; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    console.log(string);
  }
};
print1To5();

/*Question-5

WAP to print this

    A
   BBB
  CCCCC
 DDDDDDD
EEEEEEEEE*/

let alphabetArray = ["A", "B", "C", "D", "E"];
const printAToE = () => {
  for (let i = 0; i < alphabetArray.length; i++) {
    let string = "";
    for (let j = 0; j <= i; j++) {
      string += alphabetArray[j];
    }
    console.log(string);
  }
};

printAToE();

const printStarPattern = () => {
  for (let i = 1; i <= 4; i++) {
    let spaces = " ".repeat(4 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
};

// Call the function to print the pattern
printStarPattern();
