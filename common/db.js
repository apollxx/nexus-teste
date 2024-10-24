const mysql = require('mysql2');
var con;


function connectDatabase() {
    if (!con) {
        con = mysql.createConnection({
            host: process.env.STACKHERO_MYSQL_HOST,
            port: process.env.STACKHERO_MYSQL_PORT,
            user: "root",
            password: process.env.STACKHERO_MYSQL_ROOT_PASSWORD
        });
        con.connect(function (err) {
            if (err) console.log(err);
            else {
                con.query('CREATE DATABASE IF NOT EXISTS nexus', (err, result) => {
                    if (err) throw err;
                });
                con.changeUser({database: 'nexus'}, (err) => {
                    if (err) throw err;
                });
                console.log("conectado ao banco de dados");
            }

        });


    }
    return con;
}

module.exports = connectDatabase();