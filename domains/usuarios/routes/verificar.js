const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/usuarios", (req, res) => {
    const {email, senha } = req.body;
    if (!email || !senha) res.send("Campos Nulos");
    var sql = `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`;
    con.query(sql, (err, result) => {
        let msg = '';
        if (err) msg = "Dados Invalidos";
        else{
            msg = {nome: result[0].nome}
        }
        res.send(msg);
    })
})

module.exports = {
    verificarUsuario: router
};