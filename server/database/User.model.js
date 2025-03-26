module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: true, unique: true },
        password: { type: DataTypes.STRING, allowNull: true },
        phone: { type: DataTypes.STRING , allowNull: true },
        address: { type: DataTypes.TEXT  , allowNull: true},
        role: {
            type: DataTypes.ENUM("customer", "admin"),
            defaultValue: "customer"
        } // Users can be customers or admins
    });
    return User
}

