const express = require("express");

const router = express.Router();

router.get("/", (req,res)=> {
    res.render("admin/login/login", {layout: 'login'});
});


router.get("/add-user", (req,res)=> {
    res.render("admin/login/add-user", {layout: 'login'});
});


router.post("/add-user", (req,res)=> {
    res.send(req.body)
});

module.exports = router;