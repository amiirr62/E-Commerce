



class UserController{
    
    async getAllUsers(req,res,next){

       try {
        
         const errors = validationResult(req)

            if (!errors.isEmpty()) {
                let myErrors = errors.array()
                req.flash('errors', myErrors)

            return res.redirect('/products' )
            }
        

       }catch(errors){
         next(errors)
       }
    }

   }
    module.exports = UserController