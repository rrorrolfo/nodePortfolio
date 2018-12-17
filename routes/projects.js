const express = require("express");
const router = express.Router();
// Require the projects data
const { projects }  = require("../data.json");

// Projects route
router.get("/project", (req, res) => {
    res.render("project");
});

module.exports = router;