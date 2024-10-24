const mysql = require('mysql');
var con;

function connectDatabase() {
    if (!con) {
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "admin",
            database: "nexus"
        });

        con.connect(function(err){
            if (err) console.log("erro ao conectar ao banco de dados");
            console.log("conectado ao banco de dados");
        });
    }
    return con;
}

module.exports = connectDatabase();