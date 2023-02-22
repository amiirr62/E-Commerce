const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const productController = require('../controllers/productsController')
const productsValidator = require('../validators/productsValidator')


router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('errors', 'You need to LogIn first!!')
    res.redirect('/auth/login')
})

router.get('/', productController.showProducts)

router.get('/:id',productController.seeOneProduct) 

router.post('/',productsValidator.products(),productController.addProduct)

router.delete('/:id',productController.deleteProduct)

router.put('/:id',productsValidator.products(),productController.updateProduct)
    


    
module.exports = router