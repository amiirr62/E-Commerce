const validator = require('./validator')
const { body } = require('express-validator')

class authValidator extends validator {
    signUp(){
        return [body('name','Name is required!!').not().isEmpty(),
                body('email','Not a Valid Email!!').isEmail(),
                body('password','Password is required!!').isLength({ min: 1 })]
    }

    login(){
        return [body('email','Not a Valid Email!!').isEmail(),
                body('password','Password is required!!').isLength({ min: 1 })]
    }
}

module.exports = new authValidator