const express = require("express");
const router = express.Router();

// Root route
router.get("/", (req, res) => {
    res.render("index");
});

// About route
router.get("/about", (req, res) => {
    res.render("about")
});

module.exports = router;