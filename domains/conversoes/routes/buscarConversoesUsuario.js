const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/conversoes/:usuarioid/:moedaid?", async (req, res) => {
    const usuarioId = req.params.usuarioid;
    const moedaId = req.params.moedaid;
    //se o id da moeda nao foi informado, ira buscar todas as moedas relacionadas ao usuario
    if(!moedaId){
        var sql = "SELECT * FROM conversoes where usuarioid = " + usuarioId;
        con.query(sql, (err, result) => {
            if (err) throw err;
            return res.send(result);
        })
    }else{
        
    }

})

module.exports = {
    buscarConversoesUsuario: router
};