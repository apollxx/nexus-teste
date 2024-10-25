const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();
const axios = require('axios');
const geckoHeaders={
    "x-cg-demo-api-key":"CG-nKzrmo8tdMq1jigXpJKsdHnx"
}

router.get("/api/moedas/valor/:moeda", async(req, res) => {
    let url = "https://api.coingecko.com/api/v3/simple/price?"
    url = url+"ids="+req.params.moeda+"&vs_currencies=";
    const urls = [url+"brl", url+"usd"]

    const res1 = await axios.get(urls[0], {headers:geckoHeaders});
    const res2 = await axios.get(urls[1], {headers:geckoHeaders});

    precos = {
        brl: res1.data[req.params.moeda.toString()].brl,
        usd: res2.data[req.params.moeda.toString()].usd,
    }
    res.send(precos)
})

module.exports = {
    valor: router
};
