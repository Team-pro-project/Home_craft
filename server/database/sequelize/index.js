const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize( "home_craft" , "root", "Sgdkkt123",
    {
      host: "localhost",
      dialect: "mysql",
    }
  );

// User Model with Roles
const User = require("../User.model")(sequelize, DataTypes);
const Category = require("../Category.model")(sequelize, DataTypes);
const Product = require("../Product.model")(sequelize, DataTypes);
const Order = require("../Order.model")(sequelize, DataTypes);

// Define Relationships

// Category → Product (One-to-Many)
Category.hasMany(Product, { 
    foreignKey: "categoryId",
    onDelete: "SET NULL"
});
Product.belongsTo(Category, { 
    foreignKey: "categoryId",
    onDelete: "SET NULL"
});

// User → Order (One-to-Many)
User.hasMany(Order, { 
    foreignKey: "userId",
    onDelete: "CASCADE"
});
Order.belongsTo(User, { 
    foreignKey: "userId",
    onDelete: "CASCADE"
});

// Product → Order (One-to-Many)
Product.hasMany(Order, { 
    foreignKey: "productId",
    onDelete: "CASCADE"
});
Order.belongsTo(Product, { 
    foreignKey: "productId",
    onDelete: "CASCADE"
});

// Authenticate Database
sequelize.authenticate()
    .then(() => console.log("✅ Database connected successfully!"))
    .catch((err) => console.error("❌ Database connection failed:", err));

// Sync Database
sequelize.sync({ alter: true })
    .then(() => console.log("✅ Database synced successfully!"))
    .catch((err) => console.error("❌ Database sync failed:", err));

module.exports = {
    sequelize,
    User,
    Category,
    Product,
    Order
};
