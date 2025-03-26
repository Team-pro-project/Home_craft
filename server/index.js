const express = require("express");
const cors = require("cors");
require("./database/sequelize/index");
const userroute = require("./routes/User.route")

const productRoute=require("./routes/Product.route")
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());




app.use("/user",userroute)
app.use( "/api/products", productRoute );

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});