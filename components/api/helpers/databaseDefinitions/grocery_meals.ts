import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => sequelize.define('grocery_meals', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})