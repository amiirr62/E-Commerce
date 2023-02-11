


const express = require('express')
const User = require('../models/users')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const app = express()

const authController = require('../controllers/authController')
const authValidator = require('../validators/authValidator')

/* router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    next()
}) */


router.get('/login', authController.loginForm)
router.get('/signUp', authController.signUpForm)

router.post('/login',authValidator.login(),authController.login)

router.post('/signUp',authValidator.signUp(),authController.signUp)

module.exports = router


