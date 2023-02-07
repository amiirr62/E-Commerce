const express = require('express')
const router = express.Router()
const Product = require('../models/products')


router.get('/', ((req,res)=>{
    res.render('products')
}))

 

    

router.post('/', async (req,res)=>{
    
    let newProduct = new Product ({
    
        UPI:req.body.UPI,
        name:req.body.name,
        department:req.body.department,
        price:req.body.price,
        description:req.body.description

        
    
})
    await newProduct.save()
    
    
    
    
    
    return res.redirect('/products')
} )
    


    
module.exports = router