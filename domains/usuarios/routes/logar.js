const { Router } = require("express");
const jwt = require('jsonwebtoken');
const con = require("../../../common/db");
const router = Router();

router.post("/api/usuarios/logar", (req, res) => {
    const {email, senha } = req.body;
    if (!email || !senha) res.send("Campos Nulos");
    var sql = `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`;
    con.query(sql, (err, result) => {
        let msg = '';
        if(result.length == 0) return res.send("usuario nao encontrado")
        if (err) msg = "Dados Invalidos";
        else{
            msg = {
                id :  result[0].id,
                nome: result[0].nome,
                email: result[0].email
            }
        }
        res.send(msg);
    })
})

module.exports = {
    verificarUsuario: router
};