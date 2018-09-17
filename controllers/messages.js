const express = require("express");
const router = express.Router();

//get full message list
// router.get('/', (req, res) => {
//     console.log("full message list endpoint")
//     res.json({})
// })

//get message history for user
router.get('/:id', (req, res) => {
    console.log("message list endpoint hit (for user)")
    res.json({
        convos: [
            {
                userId: 317,
                senderId: 200,
                convoId: 1,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "going to want timestamp of newest message"
            },
            {
                userId: 317,
                senderId: 42,
                convoId: 2,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "going to want timestamp of newest message"
            },
            {
                userId: 317,
                senderId: 300,
                convoId: 3,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "going to want timestamp of newest message"
            }
        ]
    })
})

module.exports = router;