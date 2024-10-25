const { Router } = require("express");
const con = require("../../../common/db");
const router = Router();

router.get("/api/teste", (req, res) => {

  con.connect(function (err) {
    //var sql = "CREATE TABLE usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, senha VARCHAR(255) NOT NULL,  UNIQUE (email))";
    //var sql = "SELECT * FROM moedastop100  ORDER BY market_cap_rank";
    var sql = "DROP TABLE moedastop100";
    //var sql = "CREATE TABLE favoritas (id INT AUTO_INCREMENT PRIMARY KEY, moeda_id NOT NULL, usuario_id VARCHAR(255) NOT NULL)";
    //const sql = "show tables"
       con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
    });   
    
  });
  res.send("teste");
})

module.exports = {
  teste: router
};