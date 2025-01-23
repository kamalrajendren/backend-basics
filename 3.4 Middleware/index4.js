import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const portNo = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log("res", req.body);
  res.send(`<h1>your name is ${res.body?.street + res.body?.pet}<h1>`);
});

app.listen(portNo, () => {
  console.log("Hello world");
});
