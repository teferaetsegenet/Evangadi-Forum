const {pool} = require("../db/dbConfig")

// sign up

const signUp = async (req, res)=>{
    const { firstName, lastName , email, password } = req.body;

    // checking for the inputs
    if ( !firstName || !lastName || !email || !password){
        return res.status(404).json({
        status:false,
        message: "Missing required fields"
});
    }

try {
    let existingUser = await pool.query(`SELECT * FROM user WHERE email='${email}'`);

    console.log(existingUser)
    // if(existingUser[0])
}catch (error){


}
};


module.exports = { signUp };