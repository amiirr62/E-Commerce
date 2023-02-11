
const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')


const app = express()

global.config = require('./config')
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
                .then(() => console.log('MongoDB has been Connected!'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('method'))
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use('/', require('./routes/0-index'))
app.use(cookieParser('njcbtapobcrreygxzvnmaysl764k20723n24bkvsgsm'))

app.use(session({
  secret: 'gsaiwqun6311b',
  resave: true,
  saveUninitialized: true,
  cookie : {expires : new Date(Date.now() + (1000 * 3600 * 24 * 100)) ,
            store   : MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/Ecommerce' })
           }
}))

app.use(flash())  

require('./passport/passport-local')
app.use(passport.initialize())
app.use(passport.session())





app.use((req,res,next)=>{
  res.locals = {errors : req.flash('errors'), req }     ///We access to req in all views
  next()
})


  app.listen(config.port, ()=>{
    console.log(`App is running on port ${config.port}`)
  })