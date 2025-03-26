module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        type: {
            type: DataTypes.ENUM("chair", "table", "rug", "light", "sofa", "bed"),
            allowNull: false
        }, // Product type replaces subcategory
        price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        imageUrl: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.ENUM("sitting room", "gaming room", "bathroom", "bedroom", "outdoor", "kitchen") },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id'
            }
        }
    });
    return Product
}