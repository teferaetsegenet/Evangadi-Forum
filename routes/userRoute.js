const express = require("express");
const rout = express.Router();
const  {register, login, check} = require('../controler/userControler');

// const express = request




// rout.get('/',(req,res)=>{
//     res.send("Hi there")
// })

// login route

rout.post('/login',login)

// login registration
rout.post('/register', register)

// check route
rout.get('/check', check)

// post method 
rout.post('/api/users/db',(req,res)=>{
    res.send("Welcome to mysql");
})


module.exports = rout;