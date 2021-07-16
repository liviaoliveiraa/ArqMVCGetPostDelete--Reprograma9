const express = require("express");
const router = express.Router();
const controller = require("../controllers/contatosControllers");

router.get("/", controller.getAll); 
router.get("/nome", controller.getByName); // nao esta filtrando, preciso verificar
router.delete("/:id", controller.dellContact);

router.get("/:id", controller.getById);

router.post("/:add", controller.createContact)


module.exports = router;