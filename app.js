
const express = require('express')
const app = express()
const mongoose = require('mongoose')



global.config = require('./config')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
app.use('/', require('./routes/0-index'))
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
                .then(() => console.log('MongoDB has been Connected!'))



  app.listen(config.port, ()=>{
    console.log(`App is running on port ${config.port}`)
  })