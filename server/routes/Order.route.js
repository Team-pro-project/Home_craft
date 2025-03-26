const express = require("express");
const { getAll, getById, create, update, delete: deleteOrder } = require("../controllers/Order.controller");
const Router = express.Router();

Router.get("/get", getAll);
Router.get("/:id", getById);
Router.post("/add", create);
Router.put("/update/:id", update);
Router.delete("/delete/:id", deleteOrder);

module.exports = Router; 