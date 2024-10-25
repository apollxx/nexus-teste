const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/moedas/buscartop100", (req, res) => {
    var sql = "SELECT * FROM moedastop100  ORDER BY market_cap_rank";
    con.query(sql, (err, result) => {
      if (err){
        res.send("erro");
        throw err;
      }else{
        res.send(result);
      }
    });   
})

module.exports = {
    buscartop100: router
};