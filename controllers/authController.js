
const User = require('../models/users')
const passport = require('passport')






class authController {

//************************************** SignUpForm **************************************** */
    async signUpForm(req,res,next){
        try {
            return res.render('auth/signUp')
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