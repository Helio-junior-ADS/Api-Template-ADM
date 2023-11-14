const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "public")));

const home = require("./controllers/home");
const login = require("./controllers/login");
const dashboard = require("./controllers/dashboard");



app.use("/", home);
app.use("/login", login);
app.use("/dashboard", dashboard);


app.listen(3333, ()=> {
    console.log("SERVER ONLINE NA PATH http://localhost:3333");
});

