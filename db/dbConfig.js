const mysql = require('mysql2');
var dbConnection = mysql.createPool({
    host: 'localhost',
    port:'3306',
    password:'123456',
    user:'evan_forumdb',
    database:'evan_forumdb',
    connectionLimit:10
})

dbConnection.execute("select 'connected'", (err, result)=> {
    if (err) console.log (err.message);
    else console.log(result);
})

