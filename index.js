const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
//localhost:3000
//run: node index.js
