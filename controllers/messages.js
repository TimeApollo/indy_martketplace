const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

//get full message list
// router.get('/', (req, res) => {
//     console.log("full message list endpoint")
//     res.json({})
// })

var MessageSchema = new mongoose.Schema({
    message: String,
});


router.post('/postmessages', (req, res) => {
    const incomingMessage = req.body.message;
    const Message = mongoose.model(req.body.convoId, MessageSchema)

    let newMessage = new Message({
        message: incomingMessage
    });

    newMessage.save()

    res.send("something was posted")
})

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
                newMsgTime: "2h"
            },
            {
                userId: 317,
                senderId: 42,
                convoId: 2,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "4d"
            },
            {
                userId: 317,
                senderId: 300,
                convoId: 3,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "1d"
            },
            {
                userId: 317,
                senderId: 444,
                convoId: 1,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "14 May 2018"
            },
            {
                userId: 317,
                senderId: 212,
                convoId: 2,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "12h"
            },
            {
                userId: 317,
                senderId: 1018,
                convoId: 3,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "5d"
            },
            {
                userId: 317,
                senderId: 200,
                convoId: 1,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "2h"
            },
            {
                userId: 317,
                senderId: 42,
                convoId: 2,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "4d"
            },
            {
                userId: 317,
                senderId: 300,
                convoId: 3,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "1d"
            },
            {
                userId: 317,
                senderId: 444,
                convoId: 1,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "14 May 2018"
            },
            {
                userId: 317,
                senderId: 212,
                convoId: 2,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "12h"
            },
            {
                userId: 317,
                senderId: 1018,
                convoId: 3,
                newMsg: "want to find newest message using timestamp",
                newMsgTime: "5d"
            }
        ]
    })
})

module.exports = router;