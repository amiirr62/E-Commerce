const validator = require('./validator')
const { body } = require('express-validator')

class productsValidator extends validator {
    products(){
        return [body('UPI','UPI is required!!').not().isEmpty(),
                body('name','Name is required!!').not().isEmpty(),
                body('price','Price is required!!').not().isEmpty(),
               ]
    }

   
}

module.exports = new productsValidator