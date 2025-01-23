import express from "express";
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1 style='color:blue;'> Hello man<h1> ");
});

app.get("/about", (req, res) => {
  res.send("<h1 style='color:red;'>About Me<h1> ");
});

app.get("/contact", (req, res) => {
  res.send("<h2>call me : 227494******61<h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
