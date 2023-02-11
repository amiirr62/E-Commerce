const express = require('express')
const Product = require('../models/products')


class productController {

    async showProducts(req,res,next){
        try {
            res.render('products')
        } catch (error) {
            next(error)
        }
    }


   async  addProduct (req,res,next){
    try {
        
            let newProduct = new Product ({
            
                UPI:req.body.UPI,
                name:req.body.name,
                department:req.body.department,
                description:req.body.description,
                price:req.body.price,
             
        })
            await newProduct.save()
            
            return res.redirect('/products')

        }    catch (error) {
        
            next(error)
       }
    
            
        
    }
}

module.exports = new productController