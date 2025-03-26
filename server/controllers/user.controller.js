const {sequelize,User}=require("../database/sequelize/index")
const bcrypt = require('bcrypt');
let env = require('dotenv').config();
var jwt = require('jsonwebtoken');
console.log("env",env);
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD_APP_SPECIFIC ,
  },
});

module.exports={
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching users" });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] }
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching user" });
    }
  },

  // Update user
  updateUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // If password is being updated, hash it
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      
      await user.update(req.body);
      res.json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating user" });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      await user.destroy();
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting user" });
    }
  },

  gmailverif: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      
      if (!user) {
        res.send("User not found");
      }
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Password Reset",
        html: `<p>Click heeeeereee <a href="${`http://localhost:3000/reset-password`}">here</a> to reset your password.</p>`,
      };
  
      const x = await transporter.sendMail(mailOptions);
      console.log(x, "x");  
  
     
      res.send( user);
    } catch (error) {
      console.error(error); 
      
    }
  },
  
  resetpassword: async (req, res) => {
    const { password, email } = req.body;
    try {
    
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        res.send( "User not found" ); 
      }
  
     
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
  
      
      await user.save();
  
    
      console.log(user);
  
    
      res.send( "Password successfully reset!" );
    } catch (error) {
   
      console.log(error);

    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email , "user");
      const user = await User.findOne({ where: { email: email } });
  
      if (!user) {
        return res.json("user not found");
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(passwordMatch, 'sss');
      
      if (!passwordMatch) {
        console.log("doesnt match");
        res.send("INCORRCT password")
      }
      else {   
        
        const token = jwt.sign({ id: user.id  }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token , role : user.role });}
      
   
    } catch (error) {
      console.error(error);
    }
  },

  signup: async (req, res) => {
    const newUser = req.body;
    try {
   
      const hash = await bcrypt.hash(newUser.password, 10)
      newUser.password = hash;
     
      
      const user = await User.create(newUser); 
      res.send({ message: "user created", id: user.id });
    } catch (error) {
      console.error(error);
      res.send("user exist")
    }
  }
}



