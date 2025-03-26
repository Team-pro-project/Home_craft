const express = require('express');
const router = express.Router();
const User = require("../controllers/user.controller");

// Auth routes
router.post('/login', User.login);
router.post('/signup', User.signup);
router.post("/sendemail", User.gmailverif);
router.put("/reset-password", User.resetpassword);

// Admin routes
router.get('/get', User.getAllUsers);
router.get('/:id', User.getUserById);
router.put('/update/:id', User.updateUser);
router.delete('/delete/:id', User.deleteUser);

module.exports = router;