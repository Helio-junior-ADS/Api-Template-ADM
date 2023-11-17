const express = require("express");
const db = require("../db/models");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/", (req,res)=> {
    res.render("admin/login/login", {layout: 'login'});
});


router.get("/add-user", (req,res)=> {
    res.render("admin/login/add-user", {layout: 'login'});
});


router.post("/add-user", async(req,res)=> {
    var dados = req.body;
    
    dados.password = await bcrypt.hash(dados.password, 8);

    await db.users.create(dados).then(()=>{

        req.flash("success_msg", "Usuário cadastrado com sucesso");
        res.redirect("/login")

    }).catch(()=> {
        
        req.flash("error_msg", "Erro::Usuário Não foi cadastrado");
        res.redirect("/login/add-user");
    })
});

module.exports = router;