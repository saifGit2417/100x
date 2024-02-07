let result = document.getElementById("result");
let sum = document.getElementById("sum");

// sum.addEventListener("click", () => {
//   let i1 = parseInt(document.getElementById("i1").value);
//   let i2 = parseInt(document.getElementById("i2").value);
//   let sum = i1 + i2;

//   return (i1.innerText = ""), (i2.innerHTML = ""), (result.innerHTML += sum);
// });

const handleSum = () => {
  let i1 = parseInt(document.getElementById("i1").value);
  let i2 = parseInt(document.getElementById("i2").value);
  let sum = i1 + i2;
  console.log("sum: ", sum);
  return (result.innerHTML += sum);
};

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
