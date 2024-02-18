import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Order = db.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    deliveryAdderss: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transactionAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
});

Order.sync();