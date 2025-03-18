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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
