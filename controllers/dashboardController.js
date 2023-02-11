const User = require('../models/users')

const passport = require('passport')





module.exports = new class dashboardController  {
    
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
      }
  
  