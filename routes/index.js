const express = require('express');
const router = express.Router()

//@desc Login/Landing page
//@route Get/

router.get('/',(req,res) => {
    res.render('Login')
})

//@desc Dashboard
//@route Get/dashboard

router.get('/dashboard',(req,res) => {
    res.render('Dashboard')
})

router.get('/test',(req,res) => {
    res.render('This is Test')
})

module.exports = router