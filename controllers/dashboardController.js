const User = require('../models/users')

const passport = require('passport')


const { body, validationResult } = require('express-validator')





module.exports = new class dashboardController  {
    //**************************************** index ********************************/
    async index(req,res,next){

       try {
        return res.render('dashboard')
        
       } catch (err) {
            next(err)
       }
    }
   
        catch (err) {
              next(err)
        }
//*********************************** edituser *************************************/
    async edituser(req,res,next){

      try {
        
        const errors = validationResult(req)

            if (!errors.isEmpty()) {
                let myErrors = errors.array()
                req.flash('errors', myErrors)

            return res.redirect('/dashboard' )
            }

            let data = {
              name     : req.body.name,
              lastName : req.body.lastName,
              birthday : req.body.birthday,
              email    : req.body.email,

            }
            if(req.file){  // if any file has been uploaded
              data.img = req.file.path.replace(/\\/g,'/').substring(6)
            }
            
            await User.updateOne({_id : req.user.id}, {$set : data})
            res.redirect('/dashboard')

      } catch (err) {
            next(err)
      }
    }

    
  }
  
   