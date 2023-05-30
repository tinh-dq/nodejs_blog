import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import morgan from "morgan";
import { create } from "express-handlebars";
const hbs = create({ extname: "hbs" });

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/search", function (req, res) {
  console.log(req.query);
  res.render("search");
});

app.post("/search", function (req, res) {
  console.log(req.body);
  res.send("searching");
});

app.get("/news", function (req, res) {
  res.render("news");
});
app.listen(3000);
// localhost:3000
