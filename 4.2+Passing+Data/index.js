import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName || "";
  const lName = req.body.lName || "";
  const noOfLetters = (fName + lName).replace(/\s+/g, " ").length;
  console.log("noOfLetters :", noOfLetters);
  res.render("index.ejs", {
    noOfLetters: noOfLetters,
  });
});

app.listen(port, () => {
  console.log("app running successfully");
});
