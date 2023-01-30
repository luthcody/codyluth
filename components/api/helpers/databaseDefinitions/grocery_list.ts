import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => sequelize.define('grocery_list', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    type: {
        type: DataTypes.ENUM('meal', 'item', 'adjustment'),
        allowNull: false,
    },
    finished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    recurring: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})