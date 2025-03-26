const {Product}=require('../database/sequelize/index');
const { Op } = require("sequelize");
module.exports = {
  getAllProduct: async(req, res) => {
    try{
      var data= await Product.findAll()
      res.json(data)
    }
  catch (err){
    res.send(err)
  }
  },

  addProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
},

getOneProduct : async (req,res)=>{
  try {
      var {id}=req.params 
      const oneProduct= await Product.findOne({
        where:{ 
          id:id
        }}
      )
      res.status(200).json(oneProduct)
  } catch (error) {
      res.status(500).json(error)
  }
},

deleteProduct: async(req, res)=> {
  try {
    var {id}=req.params
   var deleted= await Product.destroy({
      where:{
        id:id
      }
    })
    res.json("deleted")
  }
  catch (err) {
    res.send(err)
  }
},

updateProduct: async(req ,res)=>{
  try{
    var {id}=req.params
    var updatePost=await Product.update(req.body,{
      where:{
        id:id,
      },
      
    })
    res.json('updated')
  }
  catch (err){
    res.send(err)
  }
},

 searchprod : async (req, res) => {
  try {
    const { search } = req.query;
    console.log("Search query received:", search); 

    if (!search) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const products = await Product.findAll({
      where: {
        name: { [Op.like]: `%${search}%` }
      }
    });

    console.log("Products found:", products); 
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in search API:", error);
    res.status(500).json({ message: error.message });
  }
}

}