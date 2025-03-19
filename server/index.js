const express = require("express");
const cors = require("cors");
const userroute=require("./routes/User.route")
require("./database/sequelize/index");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/user",userroute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
