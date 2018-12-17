///////// PROJECTS ROUTES /////////
const express = require("express");
const router = express.Router();
// Require the projects data
const { projects }  = require("../data.json");


// Projects route
router.get("/project", (req, res) => {
    res.render("project", projects);
    console.log(projects);

});

module.exports = router;