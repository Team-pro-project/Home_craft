const express = require("express");
const cors = require("cors");
require("./database/sequelize/index");
const userroute = require("./routes/User.route")

const productRoute=require("./routes/Product.route")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});