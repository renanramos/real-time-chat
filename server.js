const express = require('express');
const messageController = require('./controllers/message-controller')
const bodyParser = require('body-parser')
const app = express();
const http = require('http').Server(app);
const port = 3000

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Access-Control-Allow-Origin, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    
    next();
});

app.use('/', messageController)


http.listen(port, (err) => {
    console.log(`Server is running in port ${port}`, err)
})