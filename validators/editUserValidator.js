const validator = require('./validator')
const { body } = require('express-validator')
const path = require ('path')

class editUserValidator extends validator {
    handle(){
        return [body('name','Name is required!!').not().isEmpty(),

                body('img').custom(async value => {
                    if(!value){  // if no file uploaded do return , do not run codes
                        return
                    }
                    if(!['.jpg','.jpeg','.png','.tif'].includes(path.extname(value))){
                        throw new Error('Photo Extension in not Valid!!!')
                    }})
               
               ]
    }

}

module.exports = new editUserValidator