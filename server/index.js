const express = require("express");
const cors = require("cors");
require("./database/sequelize/index");
const ProductRouter=require("./routes/Product.route");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/Products",ProductRouter);

// app.get("/", (req, res) => {
//   res.send("Hello from backend!");
// });

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
