const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.post("/api/favoritas/favoritar", async (req, res) => {
    const {usuarioid, moedaid, moedanome} = req.body
    var sql = "SELECT * FROM favoritas where usuarioid=" + usuarioid + " AND moedaid='" + moedaid + "'";
    con.query(sql, (err, result) => {
        if (err) return res.send(err);
        if(result.length == 0){
            var sql = `INSERT INTO favoritas (usuarioid, moedaid, moedanome) VALUES ('${usuarioid}', '${moedaid}', '${moedanome}')`;
            con.query(sql, (err, result) => {
                if (err) return res.send(err);
                return res.send(result);
              });   
        }else{
            var sql = "DELETE FROM favoritas WHERE usuarioid=" + usuarioid + " AND moedaid='" + moedaid + "'";
            con.query(sql, (err, result) => {
                if (err) return res.send(err);
                return res.send(result);
              });   
        }
      });   
      return


})

module.exports = {
    favoritarMoeda: router
};