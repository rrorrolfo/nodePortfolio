///////// PROJECTS ROUTES /////////
const express = require("express");
const router = express.Router();
// Require the projects data
const { projects }  = require("../data.json");


// Projects route
router.get("/project/:id", (req, res) => {
    res.render("project", { projects });
    console.log(projects[req.params.id].project_name);
});

module.exports = router;