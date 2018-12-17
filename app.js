// Require Express
const express = require("express");

// Create the App
const app = express();

// Setting the view engine
app.set("view engine", "pug");

//////////// ROUTES /////////////////

//static route with virtual path prefix
app.use("/static", express.static("public"));

///////// Requiring routes modules /////////
const routes = require("./routes");
const projects = require("./routes/projects");

app.use(routes);
app.use(projects);

// 404 handler
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
});

/////////// SERVER /////////

// Server
app.listen(3000, () => {
    console.log("running in 3000")
});