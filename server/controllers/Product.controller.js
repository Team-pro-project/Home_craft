const { Product, Category } = require('../database/sequelize/index');

const {Product}=require('../database/sequelize/index');
const { Op } = require("sequelize");
module.exports = {
    getAllProduct: async (req, res) => {
        try {
            console.log("Fetching all products...");
            const products = await Product.findAll({
                include: [{
                    model: Category,
                    attributes: ['name']
                }]
            });
            console.log(`Found ${products.length} products`);
            res.json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    addProduct: async (req, res) => {
        try {
            console.log("Creating new product:", req.body);
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error("Error creating product:", error);
            res.status(400).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    getOneProduct: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching product with ID: ${id}`);
            const product = await Product.findOne({
                where: { id },
                include: [{
                    model: Category,
                    attributes: ['name']
                }]
            });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            console.error("Error fetching product:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Deleting product with ID: ${id}`);
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error("Error deleting product:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Updating product with ID: ${id}`);
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            await product.update(req.body);
            res.json(product);
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(400).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    }
};
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
