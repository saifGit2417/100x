function convertFromKm(kiloMeters) {
  let meters = kiloMeters * 1000;
  let centimeters = kiloMeters * 100000;
  console.log("meters: ", meters);
  console.log("centimeters: ", centimeters);
}
convertFromKm(1.346);

function areaOfCircle(radius) {
  console.log(
    `area of circle with radius ${radius} = ` + Math.PI * Math.pow(radius, 2)
  );
}
areaOfCircle(2);

function arithmaticOnNums(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 / num2);
  console.log(num1 * num2);
}

arithmaticOnNums(10, 13);

function calculatePercentage(subj1, subj2) {
  const sumOfTotalNums = subj1 + subj2;
  let percentage = (sumOfTotalNums / 200) * 100;
  console.log("total percentage is", percentage);
}

calculatePercentage(50, 50);

function areaOfRectangle(height, base) {
  let areaOfRectangle = height * base;
  console.log("areaOfRectangle: ", areaOfRectangle);
  let perimeterOfRectangle = 2 * (height + base);
  console.log("perimeterOfRectangle: ", perimeterOfRectangle);
}

areaOfRectangle(10, 20);

function findAverageOfNNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  console.log("sum: ", sum);
  console.log("average: ", average);
}

findAverageOfNNumbers(1, 2, 3);

function FtoC(temp) {
  let result = (5 / 9) * (temp - 32);
  console.log("result: ", result);
}

FtoC(100);

function totalAmountDiscountedAmount(quantity, price) {
  const totalAmount = quantity * price;
  console.log("totalAmount: ", totalAmount);
  const discountBy10Percent = quantity * price - (10 / 100) * 100;
  console.log("discountBy10Percent: ", discountBy10Percent);
}
totalAmountDiscountedAmount(10, 10);
totalAmountDiscountedAmount(5, 10);

function calculateSimpleIntrest(amount, tenure, interestRate) {
  let simpleInterestAmount = (amount * tenure * interestRate) / 100;
  console.log("simpleInterestAmount: ", simpleInterestAmount);
}

calculateSimpleIntrest(10000, 1, 10);
