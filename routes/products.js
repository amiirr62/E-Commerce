const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const productController = require('../controllers/productsController')
const productsValidator = require('../validators/productsValidator')


router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/auth/login')
})

router.get('/', productController.showProducts)

router.post('/',productsValidator.products(),productController.addProduct)
    


    
module.exports = router