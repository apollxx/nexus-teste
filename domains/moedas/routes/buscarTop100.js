const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/moedas/buscartop100/:usuarioid", (req, res) => {
  const favoritesArray = [];
  const allArray = [];
  const usuarioId = req.params.usuarioid;
  var sql = "SELECT * FROM moedastop100  ORDER BY market_cap_rank";
  con.query(sql, (err, result1) => {
    if (err) res.send(err);
    var sql = "SELECT * FROM favoritas where usuarioid=" + usuarioId;
    con.query(sql, (err, result2) => {
      if (err) res.send(err);
      result1.forEach((res1,index) => {
        const encontrar = result2.find(ele => ele.moedaid == res1.id);
        if(encontrar) {
          result1[index] = Object.assign(result1[index],{favorito: "s"});
          result1[index].nome = result1[index].nome + " ❤️"
          favoritesArray.push(result1[index])
        }
        else{
          result1[index] = Object.assign(result1[index],{favorito: "n"})
          allArray.push(result1[index]);
        }

      })
      const finalArray = favoritesArray.concat(allArray)
      res.send(finalArray)
    })
  });
})

module.exports = {
  buscartop100: router
};