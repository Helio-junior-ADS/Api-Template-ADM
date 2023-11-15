const express = require("express");

const router = express.Router();

router.get("/", (req,res)=> {
    res.render("admin/login/login", {layout: 'login'});
});

module.exports = router;