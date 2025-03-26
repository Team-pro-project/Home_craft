const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/User.route");
const productRoute = require("./routes/Product.route");
const orderRoute = require("./routes/Order.route");
const { sequelize } = require("./database/sequelize/index");

require("./database/sequelize/index");
const userroute = require("./routes/User.route")

const productRoute=require("./routes/Product.route")
*const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sync database with models
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database synced successfully!"))
  .catch((err) => console.error("❌ Database sync failed:", err));

// app.get("/", (req, res) => {
//   res.send("Hello from backend!");
// });


app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});