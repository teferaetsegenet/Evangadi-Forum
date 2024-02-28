const dbConnection =require('../db/dbConfig')

async function register(req, res){
const {username, firstname, lastname, email, password} = req.body;
if(!username || !firstname || !lastname || !email || !password){
    return res.json({msg:"please provide all the information"})
}
try{
   
    const [user]= await dbConnection.query("SELECT username, userid, from users where username=? or email =?", 
    [username,email])
    // return res.json({user : user})

    // if(user.length>0){
    //     return res.json({msg:"user allready exist"})
    // }
    if (password.length<=8){
        return res.json({msg:"password must be atleast 8 character"})
    }


await dbConnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)", [username, firstname, lastname, email, password])
return res.json({msg: "user created"})


}catch(err){
    console.log(err.message)
    return res.json({msg:"someting went wrong please try again"})
}

}

async function login(req, res){

    res.send("You are logged in");

}

async function check(req, res){

    res.send("user checked");

}

module.exports = {register, login, check}