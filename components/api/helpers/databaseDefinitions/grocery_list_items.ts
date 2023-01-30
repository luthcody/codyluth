import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => sequelize.define('grocery_list_items', {
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
})