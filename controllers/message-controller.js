const express = require('express')
const config = require('../config/db-config')
const Message = require('../model/message-model')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const router = express.Router();


io.on('connection', (err)=>{
    console.log('an user is connected', err)
})

config.getConnection()

router.get('/messages', (req, res) => {
    Message.find({}, (err, messages)=>{
        res.send(messages)
    })
})

router.post('/messages', (req, res)=>{
    let message = new Message(req.body);
    message.save((err)=>{
        if(err){
            sendStatus(500)
        }
        io.emit('message', req.body);
        res.sendStatus(200);
    })
})

module.exports = router