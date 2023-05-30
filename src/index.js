const path = require("path");
const express = require("express");
const app = express();
// HTTP Logger
const morgan = require("morgan");
const create = require("express-handlebars").create;
const hbs = create({ defaultLayout: "main", extname: ".hbs" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
// import route to express
const route = require("./routes");

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

app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(3000);
// localhost:3000
