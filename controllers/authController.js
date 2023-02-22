const express = require('express')
const User = require('../models/users')
const passport = require('passport')
const { body, validationResult } = require('express-validator')
const Recaptcha = require('express-recaptcha').RecaptchaV2
const options = { hl: 'en' }
const recaptcha = new Recaptcha('6LfeXaIkAAAAAPDH3rdD2G_ILv4rbD4MTXeHqg_D', '6LfeXaIkAAAAAO_dVdUZsEOIMQzr6BQA9O7RzyZj', options)





class authController {

//************************************** SignUpForm **************************************** */
    async signUpForm(req,res,next){
        try {
            
            return res.render('auth/signUp', {recaptcha : recaptcha.render()})
        } catch (err) {
            next(err)
        }
    }


//************************************** LoginForm **************************************** */
    async loginForm(req,res,next){
        try {
            return res.render('auth/login')
        } catch (err) {
            next(err)
        }
    }
//************************************** SIGN UP **************************************** */
    async signUp(req,res,next){
        try {
                let recaptchaResult = await new Promise((resolve,reject)=>{
                    recaptcha.verify(req,(err,data)=>{
                        if(err){
                            req.flash('errors','CHeckmark ')
                            res.redirect('/auth/signUp')
                            resolve(false)
                        }else{
                            resolve(true)
                        }
                    })
                })

                if(!recaptchaResult){
                    return
                }
                
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    let myErrors = errors.array()
                    req.flash('errors', myErrors)
                    return res.redirect('/auth/signUp' )
                }
            
        passport.authenticate('local.signUp',{
            successRedirect : '/dashboard',
            failureRedirect : '/auth/signUp',
            failureFlash : false

          })(req,res,next)
              
        
        } catch (err) {
            next(err)
        }
    }
//************************************** LOGIN **************************************** */

    async login(req,res,next){
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                let myErrors = errors.array()
                req.flash('errors', myErrors)
                return res.redirect('/auth/login' )
            }
            
            passport.authenticate('local.login', (err,user)=>{
                if(!user) return res.redirect('/auth/login')

            req.logIn(user, err=>{
              return res.redirect('/dashboard')
            })
          })(req,res,next)
            
        
        } catch (err) {
            next(err)
        }
    }
    

}


module.exports = new authController