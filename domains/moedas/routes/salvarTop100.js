const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();
const axios = require('axios');
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
const geckoHeaders={
    "x-cg-demo-api-key": process.env.geckoKey
}

router.post("/api/moedas/salvartop100", async(req, res) => {
    const moedas = await axios.get(url,{headers:geckoHeaders});
    const sql = "INSERT INTO moedastop100 (id, nome, market_cap_rank, image) VALUES ?"
    const values = []
    moedas.data.forEach(moeda => {
        let tempArray = [moeda.id,moeda.name, moeda.market_cap_rank, moeda.image];
        values.push(tempArray);
    });
    con.query(sql, [values],  (err, result) =>{
        if(err) throw err;
        res.send("Number of records inserted: " + result.affectedRows);
    })
})

module.exports = {
    salvarTop100: router
};