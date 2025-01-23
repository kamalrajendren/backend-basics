import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log("req :", req.method);
  console.log(`request url ${req.url} and request method is ${req.method}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1> Hello </h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
