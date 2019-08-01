require('dotenv').config()
const mongoose = require('mongoose')

const url =  process.env.URL_MONGODB

const _getConnection = () => {
    return mongoose.connect(url, {useNewUrlParser: true}, (err)=>{
        console.log(`Connected! `, err)
    })
}

module.exports = {
    getConnection: _getConnection
}
