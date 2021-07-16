const express = require("express");
const router = express.Router();

router.get("/",( req, res) => {
    res.status(200).send({
        "name": "servidor-para-casa",
        "version": "1.0.0",
        "author": "Lívia Oliveira",
        "description": "Criar um servidor do zero, usando arquitetura MVC e converter as demandas de negócio em endpoints, criando as lógicas necessárias para cada rota.",
    })

})

module.exports = router; 