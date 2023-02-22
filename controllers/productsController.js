const express = require('express')
const Product = require('../models/products')
const passport = require('passport')
const { body, validationResult } = require('express-validator')


class productController {

    async showProducts(req,res,next){
        try {
            let products = await Product.find({})

            res.render('products', {products : products , 
                                    title : 'All Products', 
                                    errors : req.flash('errors') , 
                                    message : req.flash('message')})
        } catch (error) {
            next(error)
        }
    }

    async seeOneProduct(req,res,next){
        try {
            let product = await Product.findById({_id : req.params.id})
        
            res.render('product',{product:product}) 
        } catch (err) {
            next(err)
        }
    }

   async  addProduct (req,res,next){
    try {
        const errors = validationResult(req)
            if (!errors.isEmpty()) {
                let myErrors = errors.array()
                req.flash('errors', myErrors)
                return res.redirect('/products' )
            }
        
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

    async deleteProduct(req,res,next){
       
            try {
                await Product.deleteOne({_id : req.params.id})
                req.flash('message','User successfully Deleted!!') 
                return res.redirect('/products')
            } catch (err) {
                next(err)
            }
        
    }

    async updateProduct(req,res,next){

        try {
          await Product.updateMany({_id : req.params.id}, {$set : req.body})
  
          req.flash('message','User successfully updated!!') 
          
          return res.redirect('/products')
        } catch (err) {
          next(err)
        }
  
      }
}

module.exports = new productController