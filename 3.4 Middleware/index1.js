import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

//Body Parser

const xy = fileURLToPath(import.meta.url);
console.log("xy", xy);

const __dirname = dirname(xy);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (res, req) => {
  console.log("res", res.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
