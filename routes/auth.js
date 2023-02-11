


const express = require('express')
const User = require('../models/users')
const router = express.Router()
const app = express()

const authController = require('../controllers/authController')


/* router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    next()
}) */


router.get('/login', authController.loginForm)
router.get('/signUp', authController.signUpForm)


router.post('/login', authController.login)
router.post('/signUP', authController.signUp)

module.exports = router
