// // // synchronous task

// // // console.log("first task");
// // // for (let i = 0; i <= 1000; i++) {
// // //   console.log("loop call", i);
// // // }
// // // console.log("second task");

// // // asynchronous task

// // console.log("first task");
// // setTimeout(() => {
// //   console.log("asynchronous call");
// // }, 5000);
// // console.log("second task");

const fs = require("fs");

console.log("first console");

fs.readFile("Example.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log(res);
  }
});

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);
console.log("second console");
