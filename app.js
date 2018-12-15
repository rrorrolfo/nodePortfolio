// Require Express
const express = require("express");

// Require the projects data
const { projects }  = require("./data.json");

// Create the App
const app = express();

// Setting the view engine
app.set("view engine", "pug");

//////////// ROUTES /////////////////

//static route with virtual path prefix
app.use("/static", express.static("public"));

/*//error tester
app.use((req, res, next) => {
    const err = new Error("this is an error");
    err.status = 500;
    next(err);
});*/

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

/*// 404 handler
app.use((req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render("error");
});*/

/////////// SERVER /////////

// Server
app.listen(3000, () => {
    console.log("running in 3000")
});