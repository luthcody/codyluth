import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => sequelize.define('grocery_meal_items', {
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
})