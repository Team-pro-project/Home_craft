const express = require('express');
const router = express.Router();

const User=require("../controllers/user.controller")


router.post('/login' , User.login)
router.post('/signup',User.signup)


module.exports=router