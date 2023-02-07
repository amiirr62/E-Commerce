const express = require('express')
const router = express.Router()
const app = express()


router.use('/users',require('./users'))
router.use('/products',require('./products'))




router.get("/", (req, res) => {
    res.render('homePage')
     
})



module.exports = router

