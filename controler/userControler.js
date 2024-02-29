const dbConnection =require('../db/dbConfig')
const { StatusCodes } = require('http-status-codes');
const bcrypt = require ("bcrypt");


async function register(req, res) {
    const { username, firstname, lastname, email, password } = req.body;
    if (!username || !firstname || !lastname || !email || !password)
     {
        return res.status(StatusCodes.BAD_REQUEST).json
        ({ msg: "please provide all the information" });
    }
    try {
        const [user] = await dbConnection.query
        ("SELECT username, usersid FROM users WHERE username=? OR email =?",
         [username, email]);
        
        if (user.length > 0) {
            return res.status(StatusCodes.BAD_REQUEST).json
            ({ msg: "user already exists" });
        }
        
        if (password.length <= 8) {
            return res.status(StatusCodes.BAD_REQUEST).json
            ({ msg: "password must be greater than 8 characters" });
        }
// password encription
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

        await dbConnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
         [username, firstname, lastname, email, hashedPassword]);

     return res.status(StatusCodes.CREATED).json
     ({ msg: "user created" });

    } catch (err) {
        console.log(err.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json
        ({ msg: "something went wrong, please try again" });
    }
}


async function login(req, res){
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST).json
        ({msg: "Please provide all the required field" });
    }

try {
    const [user] = await dbConnection.query(
        "SELECT username, usersid, password FROM users WHERE email = ?",[email]
    );
    return re.json({user: user})
//     if (user.length ==0){
//         return res.status(StatusCodes.BAD_REQUEST).json
//         ({msg: "invalid credential"});

//         // compare the password 
//         const isMatch = await bcrypt.compare(password, user[0].password);
//         if(!isMatch) {
//             return res.status(StatusCodes.BAD_REQUEST).json({msg: "invalid credential"})
//         }
//     }
// }

    

    // res.send("You are logged in");

}




async function check(req, res){

    res.send("user checked");

}

module.exports = {register, login, check}