const express = require("express");
const router = express.Router()
const { postQuestion, allQuestion } = require ('../controler/questionController.js')


// authonthication middleware
const authMiddleware = require('../middleware/authMiddleware')

router.post("/postquestions", postQuestion)

router.get("/all-questions", allQuestion)

// router.get("/all-questions", authMiddleware, (req, res)=> {
//     res.send("all questions")
// })

module.exports = router 