const mysql = require('mysql2');
var dbConnection = mysql.createPool({
    host: process.env.HOST,
    port:'3306',
    password: process.env.PASSWORD,
    user: process.env.USER,
    database: process.env.DATABASE,
    connectionLimit:10
});




// dbConnection.execute("select 'connected'", (err, result)=> {
//     if (err) console.log (err.message);
//     else console.log(result);
// });

module.exports = dbConnection.promise()

