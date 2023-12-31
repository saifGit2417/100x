// // const express = require("express");
// // const app = express();

// // app.get("/health", (req, res) => {
// //   const userName = req.headers.name;
// //   const password = req.headers.pass;
// //   const kidneyId = req.query.kidneyId;

// //   if (userName !== "saif" && password !== "saif") {
// //     res.status(400).json({ msg: "something wrong happened" });
// //   }
// //   if (kidneyId !== 1 || kidneyId !== 2) {
// //     res.status(400).json({ msg: "wrong kidney id" });
// //   }

// //   res.json({ Msg: "your kidney is fine" });
// // });

// // app.listen(3000);

// const express = require("express");
// const { createSecureContext } = require("tls");
// const zod = require("zod");

// const app = express();
// app.use(express.json());

// // app.get("/health", function (req, res) {
// //   const username = req.headers.username;
// //   const password = req.headers.password;
// //   const kidneyId = req.query.kidneyId;

// //   if (username != "saif" || password != "saif") {
// //     res.status(400).json({ msg: "Somethings up with your ionputs" });
// //     return;
// //   }

// //   if (kidneyId != 1 && kidneyId != 2) {
// //     res.status(400).json({ msg: "Somethings up with your ionputs" });
// //     return;
// //   }
// //   // do something with kidney here
// //   res.json({
// //     msg: "Your kidney is fine!",
// //   });
// // });

// // assignmet 01 to count number of request made to servers

// let requestCount = 0;
// function countRequest(req, res, next) {
//   requestCount++;
//   console.log("requestCount", requestCount);

//   next();
// }

// app.use(countRequest);

// app.post("/health", (req, res) => {
//   const kidneys = req.body.kidneys;
//   kidneyLength = kidneys.length;

//   res.send("you have " + kidneyLength + " kidneys");
// });

// app.listen(3000);

const express = require("express");
const zod = require("zod");
const app = express();

// make schemas here to validate the things n top of file so that it can be used any where in the code
const schema = zod.array(zod.number());
const schema1 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(4).max(20),
  kidneys: zod.array(zod.number()),
});

app.use(express.json());

app.post("/health", function (req, res) {
  const kidneys = req.body.kidneys;
  // making singular validations
  //   const response = schema1.safeParse(kidneys);

  // making whole object schema of req body
  const response = schema1.safeParse(req.body);
  if (!response.success) {
    res.status(400).send(response);
  }
  res.send({
    response,
  });
});
console.log("first")
app.listen(3016);
