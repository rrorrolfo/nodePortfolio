// Require Express
const express = require("express");

// Create the App
const app = express();

// Require the projects data
//const { projects } = require("data.json");

// Setting the view engine
app.set("view engine", "pug");

//////////// ROUTES /////////////////

//static route
app.use("static/", express.static("public"));

// Root route
app.get("/", (req, res) => {
    res.render("index");
});

// About route
app.get("/about", (req, res) => {
    res.render("about")
});

// Projects route
app.get("/project", (req, res) => {
    res.render("project");
});

/////////// SERVER /////////

// Server
app.listen(3000, () => {
    console.log("running in 3000")
});