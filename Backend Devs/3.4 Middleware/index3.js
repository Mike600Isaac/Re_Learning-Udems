import express from "express";

const app = express();
const port = 3000;

let logger = (req, res, next) => {
  console.log("Request method:", req.method);
  console.log("URL:", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
