const express = require('express');
const port = 8000;



// server create
const app = express();


const userRoutes = require ("./routes/userRoute");


app.use('/api/users', userRoutes)



app.listen(port, (err) =>{
    if (err) console.log(err.message);
    else console.log(`listening to : port ${port}`);
});

app.get('/',(req,res)=>{
    res.send("Hi there")
})



