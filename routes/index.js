///////// MAIN ROUTES /////////
const express = require("express");
const router = express.Router();

const { projects }  = require("../data.json");

// Root route
router.get("/", (req, res) => {
    res.render("index", { projects });
});

// About route
router.get("/about", (req, res) => {
    res.render("about")
});

module.exports = router;