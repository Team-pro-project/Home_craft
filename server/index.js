const express = require("express");
const cors = require("cors");
const userroute=require("./routes/User.route")
require("./database/sequelize/index");
const { sequelize, User, Category, Product, Order } = require("./database/sequelize/index");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sync database with models (uncomment if needed)
// sequelize.sync({ alter: true })
//   .then(() => console.log("✅ Database synced successfully!"))
//   .catch((err) => console.error("❌ Database sync failed:", err));

// app.get("/", (req, res) => {
//   res.send("Hello from backend!");
// });

// Example endpoint to check if database seeding worked
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.findAll({ include: Category });
//     res.json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });


app.use("/user",userroute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
