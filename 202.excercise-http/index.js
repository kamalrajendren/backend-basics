import express from "express";
const portNo = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(portNo, () => {
  console.log(portNo, "listening ");
});
