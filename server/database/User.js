module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: tr },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING },
        address: { type: DataTypes.TEXT },
        role: {
            type: DataTypes.ENUM("customer", "admin"),
            defaultValue: "customer"
        } // Users can be customers or admins
    });
    return User
}
