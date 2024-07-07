import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send()
})

app.listen(3003, () => {
  console.log("server running at 3003");
});
