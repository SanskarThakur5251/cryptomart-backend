import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
});

Product.sync();