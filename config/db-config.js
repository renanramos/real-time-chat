const credentials = require('../const/credentials')
const mongoose = require('mongoose')

const _username = credentials.username
const _password = credentials.password

const _dbUrl = `mongodb://${_username}:${_password}@ds155665.mlab.com:55665/simple-chat`

const _getConnection = () => {
    return mongoose.connect(_dbUrl, {useNewUrlParser: true}, (err)=>{
        console.log(`Connected! `, err)
    })
}

module.exports = {
    dbUrl: _dbUrl,
    getConnection: _getConnection
}
