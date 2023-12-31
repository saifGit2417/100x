function graterThan(num) {
  if (num > 10) {
    return console.log(num, " is greater than 10");
  } else {
    return console.log(num, " is less than 10");
  }
}

graterThan(11);
graterThan(10);

function eligibleForLicense(age) {
  if (age > 18) {
    return console.log("eligible for license");
  } else {
    return console.log(" noteligible for license");
  }
}

eligibleForLicense(21);
eligibleForLicense(12);

function provideGrade(marks) {
  if (marks > 90 && marks < 100) {
    return console.log("student got grade A");
  } else {
    return console.log("no grade A");
  }
}

provideGrade(98);
provideGrade(90);

function displayDay(day) {
  switch (day) {
    case 1:
      return "Its Sunday";
      break;
    case 2:
      return "Its Monday";
      break;
    case 3:
      return "Its Tuesday";
      break;
    case 4:
      return "Its Wednesday";
      break;
    case 5:
      return "Its Thursday";
      break;
    case 6:
      return "Its Friday";
      break;
    case 7:
      return "Its Saturday";
      break;
    default:
      return "no day matches";
      break;
  }
}

console.log("displayDay: ", displayDay(4));

function tempDisplay(temp) {
  if (temp >= 0 && temp <= 33) {
    return `low temp`;
  } else if (temp >= 33 && temp <= 66) {
    return "medium tempreature";
  } else if (temp >= 66 && temp <= 100) {
    return "High tempreature";
  }
}

console.log(tempDisplay(96));
console.log(tempDisplay(56));
console.log(tempDisplay(16));

function decideNumbers(num) {
  if (num > 0 && num % 2 === 0) {
    return "number is positive and even";
  } else if (num > 0 && num % 2 === 1) {
    return "number is positive and odd";
  }
  if (num < 0 && num % 2 === 0) {
    return "number is negative and even";
  } else if (num < 0 && num % 2 === -1) {
    return "number is negative and odd";
  }
}

console.log(decideNumbers(8));
console.log(decideNumbers(9));
console.log(decideNumbers(-8));
console.log(decideNumbers(-9));

function validateUserName(name) {
  console.log(name.length);
  let lengthOfName = name.split(" ").join("");
  console.log("lengthOfName: ", lengthOfName);
  if (lengthOfName.length < 6) {
    return "username is too short";
  } else if (lengthOfName.length > 15) {
    return "username is too long";
  } else {
    return "username is acceptable";
  }
}

// validateUserName("saif");
console.log('validateUserName("saif");: ', validateUserName("saif"));
console.log('validateUserName("saif");: ', validateUserName("saif ur"));
console.log(
  'validateUserName("saif");: ',
  validateUserName("md saif ur rahman md rafeeq")
);
