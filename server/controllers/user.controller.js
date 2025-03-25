const {sequelize,User}=require("../database/sequelize/index")
const bcrypt = require('bcrypt');
let env = require('dotenv').config();
var jwt = require('jsonwebtoken');
console.log("env",env);


module.exports={
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



