const mongoose = require('mongoose')
const Schema = mongoose.Schema


const usersSchema = new Schema({
    name     : {type:String},
    lastName : {type:String},
    birthday : {type:Date, required:true},
    email    : {type:String, required:true},
    password : {type:String, required:true}

})


module.exports = mongoose.model('User', usersSchema, 'User')
