const express = require("express");
const rout = express.Router();




// user controllers
const  {signup, login, checkUser} = require('../controler/userControler');

// authonthication middleware
const authMiddleware = require('../middleware/authMiddleware')


// registration route register
rout.post('/signup', signup)

// login route
rout.post('/login',login)


// check route
rout.get('/check', authMiddleware ,checkUser)

// post method 
rout.post('/api/users/db',(req,res)=>{
    res.send("Welcome to mysql");
})


module.exports = rout;