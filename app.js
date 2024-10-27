const express = require("express");
const { cadastrarUsuario } = require("./domains/usuarios/routes/cadastrar");
const {verificarUsuario} = require("./domains/usuarios/routes/logar");
const {salvarTop100} = require("./domains/moedas/routes/salvarTop100")
const {buscartop100} = require("./domains/moedas/routes/buscarTop100")
const {valor} = require("./domains/moedas/routes/valor")
const {buscarConversoesUsuario} = require("./domains/conversoes/routes/buscarConversoesUsuario")
const {inserirConversao} = require("./domains/conversoes/routes/inserirConversao")
const {favoritarMoeda} = require("./domains/favoritas/routes/favoritar")
const {moedasFavoritas} = require("./domains/favoritas/routes/favoritas")
const { json } =  require('body-parser');
const con = require("./common/db"); // testando conexao com o banco de dados antes de iniciar a aplicaçao

const app = express();
app.use(json());
app.use(cadastrarUsuario, verificarUsuario, salvarTop100, buscartop100, valor, buscarConversoesUsuario, inserirConversao, favoritarMoeda, moedasFavoritas);

app.listen(process.env.PORT, () => {
    console.log(`Escutando na porta ${process.env.port}!`);
})


