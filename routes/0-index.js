const express = require('express')
const config = require('../config')

const router = express.Router()
const User = require('../models/users')



router.use('/users',    require('./users'))
router.use('/products', require('./products'))
router.use('/auth',     require('./auth'))
router.use('/dashboard',require('./dashboard'))


router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err)
      res.redirect("/auth/login")
    })
  })


router.get("/", (req, res) => {
    res.render('homePage')
     
})



module.exports = router

