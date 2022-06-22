const express = require("express");

const eta = require("eta");

const app = express();

app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set("views", "./views");

app.locals.someFunction = (arg) => "hello " + arg;

app.get("/", (req, res) => {
    res.render("template");
});

app.listen(8000, () => {
    console.log("listening on port 8000");
});