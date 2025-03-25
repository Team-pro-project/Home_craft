const express = require("express");
const cors = require("cors");
require("./database/sequelize/index");
const  Product  = require("./database/Product.model");
const productRoute=require("./routes/Product.route")
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use( "/api/products", productRoute );

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});