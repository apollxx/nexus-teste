const { Router } = require("express");
const jwt = require('jsonwebtoken');
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
            const payload ={
                id :  result[0].id,
                nome: result[0].nome,
                email: result[0].email
            }
            msg = jwt.sign(payload, process.env.JWT_KEY);
        }
        res.send(msg);
    })
})

module.exports = {
    verificarUsuario: router
};