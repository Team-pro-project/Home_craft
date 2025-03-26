module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        totalPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        status: { type: DataTypes.ENUM("pending", "shipped", "delivered", "cancelled"), defaultValue: "pending" },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        }
    });
    return Order;
};