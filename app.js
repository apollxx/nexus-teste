const express = require("express");
const { teste } = require("./domains/usuarios/routes/test");
const { cadastrarUsuario } = require("./domains/usuarios/routes/cadastrar");
const {verificarUsuario} = require("./domains/usuarios/routes/verificar");
const { json } =  require('body-parser');
const con = require("./common/db"); // testando conexao com o banco de dados antes de iniciar a aplicaçao

const app = express();
app.use(json());
app.use(teste);
app.use(cadastrarUsuario, verificarUsuario);

app.listen(3000, () => {
    console.log("Escutando na porta 3000!");
})

