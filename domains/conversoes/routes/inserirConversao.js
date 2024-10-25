const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.post("/api/conversoes/inserir", async (req, res) => {
    const {usuarioid, moedaid, moedanome, quantidade, precobrl, precousd }= req.body
    var sql = `INSERT INTO conversoes (usuarioid, moedaid, moedanome, quantidade, precobrl, precousd) VALUES ('${usuarioid}', '${moedaid}', '${moedanome}', '${quantidade}', '${precobrl}', '${precousd}')`;
    con.query(sql, (err, result) => {
        if (err) return res.send(err);
        return res.send(result);
      });   
})

module.exports = {
    inserirConversao: router
};