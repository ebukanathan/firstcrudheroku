const mongoose = require('mongoose')

const personalInfoSchema = new mongoose.Schema({
    name:String,
    email:String,
    country:String
})  


const friends = mongoose.model('friends',personalInfoSchema)

module.exports = friends;