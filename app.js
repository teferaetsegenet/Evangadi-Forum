const express = require('express');
const port = 8000;

// server create
const app = express();
const dbConnection = require('./db/dbConfig')


const userRoutes = require ("./routes/userRoute");

app.use(express.json())


app.use('/api/users', userRoutes)


async function start(){
try {
    const result =dbConnection.execute("select 'test'") 
    // console.log(result)
    await app.listen(port)
    console.log("database connection is stablished")
    console.log(`listening to : port ${port}`)
}catch(err){
    console.log(err.msg);
}
}
 start()


// app.listen(port, (err) =>{
//     if (err) console.log(err.message);
//     else console.log(`listening to : port ${port}`);
// });

// app.get('/',(req,res)=>{
//     res.send("Hi there")
// })



