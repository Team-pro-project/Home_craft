const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
require("./database/sequelize/index");
const ProductRouter=require("./routes/Product.route");
=======
const { sequelize, User, Category, Product, Order } = require("./database/sequelize/index");
>>>>>>> 45b97c865e2653ea882a841f7b8c494f6be2b5f7
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/Products",ProductRouter);

<<<<<<< HEAD
// app.get("/", (req, res) => {
//   res.send("Hello from backend!");
// });
=======
// Sync database with models (uncomment if needed)
// sequelize.sync({ alter: true })
//   .then(() => console.log("✅ Database synced successfully!"))
//   .catch((err) => console.error("❌ Database sync failed:", err));

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});
>>>>>>> 45b97c865e2653ea882a841f7b8c494f6be2b5f7

// Example endpoint to check if database seeding worked
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
