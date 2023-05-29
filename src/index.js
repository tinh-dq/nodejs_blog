import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

const app = express();

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000);
// localhost:3000
