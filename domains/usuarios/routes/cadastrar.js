const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.post("/api/usuarios/cadastrar", async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) res.send("Dados invalidos")
    else {
        var sql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`;
        con.query(sql, (err, result) => {
            let msg = ""
            if (err) msg = "erro ao criar usuario";
            else {
                msg = "Usuario criado com sucesso"
            }
            res.send(msg)
        });
    }
})

module.exports = {
    cadastrarUsuario: router
};