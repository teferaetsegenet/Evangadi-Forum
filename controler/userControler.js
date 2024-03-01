const dbConnection =require('../db/dbConfig')
const { StatusCodes } = require('http-status-codes');
const bcrypt = require ("bcrypt");
const jwt = require('jsonwebtoken');


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

    }catch (err) {
        console.log(err.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json
        ({ msg: "something went wrong, please try again" });
    }
}


async function login(req, res){
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST).json
        ({msg: "Please provide all the required fields" });
    }
    
    try {
        const [user] = await dbConnection.query(
            "SELECT username, usersid, password FROM users WHERE email = ?", [email]
        )

        // return res.json({ user: user[0].password });

    if (user.length == 0){
        return res.status(StatusCodes.BAD_REQUEST).json
        ({ msg: "invalid credential" });

    //     // compare the password 
        const isMatch = await bcrypt.compare(password, user[0].password);
        if(!isMatch) {
            return res.status(StatusCodes.BAD_REQUEST).json({msg: "invalid credential"})
        }
    }

    // ready to return token
    // if the user email and password is correct return token 
    const username = user[0].username;
    const usersid = user[0].userid;
    const token = jwt.sign({ username, usersid},"secret",{ expiresIn: "1d" })

    return res.status(StatusCodes.OK).json({msg: "user login succesful", token})


}catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json
    ({ msg: "something went wrong, please try again" });
}
// res.send("You are logged in")

}

async function checkUser(req, res){
const username = req.user.username
const usersid = req.user.usersid

    res.status(StatusCodes.OK).json({msg: "valid user", username, usersid})
    // res.send("user checked");
}

module.exports = {register, login, checkUser}