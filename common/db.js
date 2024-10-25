const mysql = require('mysql2');
var con;
const usuarioSchema = require("../domains/usuarios/model")
const moedasTop100Schema = require("../domains/moedas/modeltop100")
const conversoesSchema = require("../domains/conversoes/model")



function connectDatabase() {
    if (!con) {
        con = mysql.createConnection({
            host: process.env.STACKHERO_MYSQL_HOST,
            port: process.env.STACKHERO_MYSQL_PORT,
            user: "root",
            password: process.env.STACKHERO_MYSQL_ROOT_PASSWORD
        });
        con.connect(function (err) {
            if (err) console.log(err);
            else {
                // verificando se o database existe, caso não exista, é criado
                con.query('CREATE DATABASE IF NOT EXISTS nexus', (err, result) => {
                    if (err) throw err;
                });
                // mudando a conexao para o database
                con.changeUser({ database: 'nexus' }, (err) => {
                    if (err) throw err;
                });

                // verificando se a tabela usario existe, se nao exister, é criada
                con.query(usuarioSchema, (err, result) => {
                    if (err) throw err;
                });

                // verificando se a tabela top100Moedas existe, se nao exister, é criada
                con.query(moedasTop100Schema, (err, result) => {
                    if (err) throw err;
                });

                // verificando se a tabela conversoes existe, se nao exister, é criada
                con.query(conversoesSchema, (err, result) => {
                    if (err) throw err;
                });

                console.log("conectado ao banco de dados");
            }

        });


    }
    return con;
}

module.exports = connectDatabase();