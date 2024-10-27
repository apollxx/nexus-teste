const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/moedas/buscartop100/:usuarioid", (req, res) => {
  const usuarioId = req.params.usuarioid;
  var sql = "SELECT * FROM moedastop100  ORDER BY market_cap_rank";
  con.query(sql, (err, result1) => {
    if (err) res.send(err);
    var sql = "SELECT * FROM favoritas where usuarioid=" + usuarioId;
    con.query(sql, (err, result2) => {
      if (err) res.send(err);
      result1.forEach((res1,index) => {
        const encontrar = result2.find(ele => ele.moedaid == res1.id);
        if(encontrar) result1[index] = Object.assign(result1[index],{favorito: "s"});
      })
      res.send(result1)
    })
  });
})

module.exports = {
  buscartop100: router
};