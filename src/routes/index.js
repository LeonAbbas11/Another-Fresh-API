const express = require('express')
const router = express.Router()
const checkoutRouter = require('./checkout')

router
    .use('/checkout', checkoutRouter)

module.exports = router
