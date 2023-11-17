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
        return res.json({
            message: "Usuário cadastrado com sucesso !!!"
        });
    }).catch((err)=> {
        return res.status(400).json({
            message:"Erro:: Usuário não foi cadastrado",err
        });
    })
});

module.exports = router;