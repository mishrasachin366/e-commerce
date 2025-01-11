const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Reference to the User model
        key: "id",
      },
    },
    productIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), // Store array of product IDs
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "canceled"),
      defaultValue: "pending",
    },
  },
  {
    timestamps: true, // Automatically manage 'createdAt' and 'updatedAt'
  }
);

module.exports = { Order };
