const express = require("express");
const { addProduct, deleteProduct, updateProduct, getAllProduct, getOneProduct ,searchprod} = require("../controllers/Product.controller");
const Router = express.Router();

Router.get("/getAllProduct",getAllProduct);
Router.post("/addProduct",addProduct);
Router.delete("/deleteProduct/:id",deleteProduct);
Router.put("/updateProduct/:id",updateProduct);
Router.get("/getOneProduct/:id",getOneProduct);
Router.get("/search", searchprod);

module.exports = Router;
