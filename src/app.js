const express = require("express");
const app = express();

const index = require("./routers/index");
const contatos = require("./routers/contatosRouters");

app.use(express.json());

app.use("/", index);
app.use("/contatos", contatos);


module.exports = app;