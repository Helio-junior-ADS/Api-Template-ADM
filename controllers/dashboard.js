const express = require("express");

const router = express.Router();

router.get("/", (req,res)=> {
    res.render("admin/dashboard/dashboard", {layout: 'main'});
});

module.exports = router;