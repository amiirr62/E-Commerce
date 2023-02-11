const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const productController = require('../controllers/productsController')

router.get('/', productController.showProducts)

router.post('/',productController.addProduct)
    


    
module.exports = router