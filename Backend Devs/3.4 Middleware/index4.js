import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// import morgan from "morgan";

const app = express();
const port = 3000;

let logger = (req, res, next) => {
  console.log("Request Method:" + req.method);
  console.log("URL:" + req.url);
  console.log("Status:" + req.status);
  console.log("Date:" + req.url);
  next();
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(logger)

// app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  // console.log(req.body);
  res.send(`<h1>${req.body} ✌️</h1>`)
});
// app.get('/submit', (req, res) => {
//   res.send(req.body + "✌️");
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
