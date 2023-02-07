const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    UPI : {type:String, required:true,},
    name : {type : String,required:true},
    department : {type : String},
    price : {type : Number, required:true},
    description : {type: String},
    
})

module.exports = mongoose.model('Products', productsSchema, 'Products')