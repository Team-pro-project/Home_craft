const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize( "home_craft" , "root", "root",
    {
      host: "localhost",
      dialect: "mysql",
    }
  );

// User Model with Roles
const User = require("../User")(sequelize, DataTypes);
const Category = require("../Category")(sequelize, DataTypes);
const Product = require("../Product")(sequelize, DataTypes);
const Order = require("../Order")(sequelize, DataTypes);

// Define Relationships with ON DELETE CASCADE

// Category → Product (One-to-Many)
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "CASCADE" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

// Many-to-Many Relation: User ↔ Product via Order
User.belongsToMany(Product, { through: Order, foreignKey: "userId", onDelete: "CASCADE" });
Product.belongsToMany(User, { through: Order, foreignKey: "productId", onDelete: "CASCADE" });

// Authenticate Database
sequelize.authenticate()
    .then(() => console.log("✅ Database connected successfully!"))
    .catch((err) => console.error("❌ Database connection failed:", err));

// Sync Database Globally
// Comment out to use migrations instead
// sequelize.sync({ alter: true })
//     .then(() => console.log("✅ Database synced successfully!"))
//     .catch((err) => console.error("❌ Database sync failed:", err));

module.exports = {
    sequelize,
    User,
    Category,
    Product,
    Order
};
