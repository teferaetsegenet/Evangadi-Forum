require ("dotenv").config();
const express = require('express');
const port = 8000;
const authRouter = require("./routes/authRouter");
const cors = require('cors');
const answer = require ('./routes/answerRouter')


// server create
const app = express();

// cors middleware
app.use(cors());

// db connection
const dbConnection = require('./db/dbConfig')

// users routers middleware file
const userRoutes = require ("./routes/userRoute");

// users routers middleware file
const questionsRoutes = require ("./routes/questionRoute");

// authentication middleware file
const authMiddleware = require('./middleware/authMiddleware')

// json middleware to extract json data
app.use(express.json())

//TO check if the deployment is successful
app.get("/", (req, res) => {
    res.send({message: "Welcome to the backend" })
})

// test
app.get("/test", (req, res)=>{
    res.send("Test Route")
})

// user routes middleware
app.use('/api/users', userRoutes)


// questions routes middleware
app.use("/api/questions",authMiddleware, questionsRoutes)


//  answers routes middleware
app.use("/api/answers", authMiddleware, answer)

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






