import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`successful kamal!!!server is running on port ${port}.`);
});
