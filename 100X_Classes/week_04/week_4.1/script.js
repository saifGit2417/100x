let printResult = document.getElementById("result");
let sum = document.getElementById("sum");

const handleSum = async () => {
  try {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const response = await fetch(
      `http://localhost:8765/sum?a=${num1}&b=${num2}`
    );
    const result = await response.json();

    printResult.innerHTML += result;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  } catch (error) {
    console.log("error", error);
  }
};

let apiCall;
function handleReturnsDebounce() {
  console.log("working");
  clearTimeout(apiCall);
  apiCall = setTimeout(function () {
    handleReturns();
  }, 2000);
}

async function handleReturns() {
  let amount = parseInt(document.getElementById("amount").value);
  let duration = parseInt(document.getElementById("duration").value);
  let rate = parseInt(document.getElementById("rate").value);
  let printResult = document.getElementById("retrunresult");

  try {
    let response = await fetch(
      `http://localhost:8765/returns?amount=${amount}&duration=${duration}&rate=${rate}`
    );
    let result = await response.json();
    printResult.innerHTML = " " + result;
  } catch (error) {
    console.log(error);
  }
}

// creating dynamic string on each click
const div = document.getElementById("dynamicText");
let longString =
  "When writing a response in 100-150 words, it is recommended to write around 10-15 lines of text. This allows for enough space to convey a clear and concise message while also providing enough detail to support your arguments or points. On the other hand, when writing in 30-40 words, it is recommended to write around 3-4 lines of text. This requires more careful consideration of which information to include and what to leave out";
const words = longString.split(" ");
const addDynamicText = () => {
  let createString = "";
  for (let i = 0; i <= 10; i++) {
    createString += words[Math.ceil(Math.random() * words.length)] + " ";
  }
  div.innerHTML = createString;
};

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const colorResult = document.getElementById("colorResult");
const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const generateRandomColor = () => {
  let hexCode = "#";
  console.log(generateRandomNumber(hex.length));
  for (let i = 0; i < 6; i++) {
    hexCode += hex[generateRandomNumber(hex.length)];
  }
  return hexCode;
};

const handleChangeColor = () => {
  let randomColor = generateRandomColor();
  colorResult.innerHTML = randomColor;
  return (document.body.style.backgroundColor = randomColor);
};
