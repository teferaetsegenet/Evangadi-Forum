const dbConnection = require('../db/dbConfig');

async function postAnswer(req, res) {
    const { usersid, questionid, answer } = req.body
if (!questionid || !usersid || !answer){
    return res.status(400).json({msg: "Please insert the required fields"})
}
// insert the data into the answers table 
try{
    await dbConnection.query("INSERT INTO answers (usersid, questionid, answer)VALUES (?,?,?)", [usersid, questionid, answer])
    return res.status(200).json({msg:"The answer posted"})
}catch(error){
console.log(error.message)
return res.status(500).json({msg:"Something went wrong, try again later"})
}
}

async function allAnswer(req, res){
    // const questionid = req.query.questionid;

    const questionId = req.headers['questionid'];
    try {
        const [ allAnswer ] = await dbConnection.query("SELECT answer from answers where questionid=?", [questionId])
        return res.status(200).json({ msg:"All answer retrieved sucesfully", allAnswer })
    } catch (error){
        console.log(error.message)
        return res.status(500).json({msg:"Something went wrong, please try again later"})
    } 
}

module.exports = { postAnswer, allAnswer };