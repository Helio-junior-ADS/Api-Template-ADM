const express = require("express");
require("dotenv").config();
const { engine } = require("express-handlebars");
const path = require("path");
const db = require("./db/models")
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRETSESSION,
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
app.use((req,res,next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");

  next();
});

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "public")));


const home = require("./controllers/home");
const login = require("./controllers/login");
const dashboard = require("./controllers/dashboard");



app.use("/", home);
app.use("/login", login);
app.use("/login/add-user", login);
app.use("/dashboard", dashboard);



module.exports = app


