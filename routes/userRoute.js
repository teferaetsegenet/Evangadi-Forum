const express = require("express");
const rout = express.Router();

// const express = request




rout.get('/',(req,res)=>{
    res.send("Hi there")
})

// login route

rout.post('/login',(req,res)=>{
    res.send("You are logged in");
})

// login registration
rout.post('/register',(req,res)=>{
    res.send("You are registerd");
})

// check route
rout.get('/check',(req,res)=>{
    res.send("checked message")
})

// post method 
rout.post('/api/users/db',(req,res)=>{
    res.send("Welcome to mysql");
})


module.exports = rout;