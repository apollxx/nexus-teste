const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/favoritas/:usuarioId", async (req, res) => {
    const usuarioId = req.params.usuarioId;
    var sql = "SELECT * FROM favoritas where usuarioid=" + usuarioId;
    con.query(sql, (err, result) => {
        if (err) return res.send(err);
        return res.send(result);
      });   
})

module.exports = {
    moedasFavoritas: router
};