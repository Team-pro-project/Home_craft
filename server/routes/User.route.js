const express = require('express');
const router = express.Router();

const User=require("../controllers/user.controller")


router.post('/login' , User.login)
router.post('/signup',User.signup)
router.post("/sendemail" , User.gmailverif)
router.put("/reset-password" , User.resetpassword)

module.exports=router