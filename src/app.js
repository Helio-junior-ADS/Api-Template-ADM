const express = require("express");
const { engine } = require("express-handlebars");

const home = require("../controllers/home");
const login = require("../controllers/login");
const dashboard = require("../controllers/dashboard");

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());


app.use("/", home);
app.use("/login", login);
app.use("/dashboard", dashboard);

module.exports = app;