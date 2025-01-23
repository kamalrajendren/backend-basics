import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("import.meta.url :", import.meta.url);
console.log("@2", fileURLToPath(import.meta.url));
console.log("@3", dirname(fileURLToPath(import.meta.url)));

const app = express();

let userName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("__dirname :", __dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res, next) => {
  userName = req.body.street + req.body.pet;
  res.send(`Welcome ${req.body.street}😊`)
});

app.listen("3000", () => {
  console.log("Server listening");
});
