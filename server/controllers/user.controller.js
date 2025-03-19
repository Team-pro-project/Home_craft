const {sequelize,user}=require("../database/sequelize/index")
const bcrypt = require('bcrypt');
let env = require('dotenv').config();
var jwt = require('jsonwebtoken');
console.log("env",env);


module.exports={
    login: async (req, res) => {
        try {
          const { name, password } = req.body;
          const user = await db.User.findOne({ where: { name: name } });
          if (!user) {
            return res.json("user not found");
          }
    
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return res.json(error);
          }
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
          res.json({ token });
        } catch (error) {
          console.error(error);
        }
      },

      signup: async (req, res) => {
        const newUser = req.body;
        try {
          
          const hash = await bcrypt.hash(newUser.password, 10)
          newUser.password = hash;
          const user = await db.User.create(newUser); 
          res.send({ message: "user created", id: user.id });
        } catch (error) {
          console.error(error);
          res.send("user exist")
        }
      } 
          
    

    
}