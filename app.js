const express = require("express");
require("dotenv").config();
const { engine } = require("express-handlebars");
const path = require("path");
const db = require("./db/models")

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "public")));

const process = require('process');
/* console.log(process.env.NODE_ENV) */
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/db/config/config.js')[env];
/* console.log(config) */

const home = require("./controllers/home");
const login = require("./controllers/login");
const dashboard = require("./controllers/dashboard");



app.use("/", home);
app.use("/login", login);
app.use("/dashboard", dashboard);



module.exports = app


