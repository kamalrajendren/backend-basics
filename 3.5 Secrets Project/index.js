//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();
const _dirName = dirname(fileURLToPath(import.meta.url));

const loginPage = _dirName + "/public/index.html";
const website = _dirName + "/public/secret.html";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(loginPage);
});

app.post("/check", (req, res, next) => {
  if (req.body.password === "2002") {
    res.sendFile(website);
  } else {
    res.redirect("/");
  }
});

app.listen("3000", () => {
  console.log("localhost server running...");
});
