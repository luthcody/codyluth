import { Sequelize } from 'sequelize';
import grocery_items from './grocery_items';
import grocery_list from './grocery_list';
import grocery_locations from './grocery_locations';
import grocery_meals from './grocery_meals';
import grocery_meal_items from './grocery_meal_items';

export default (sequelize: Sequelize) => {
    const grocery_items_model = grocery_items(sequelize);
    const grocery_list_model = grocery_list(sequelize);
    const grocery_locations_model = grocery_locations(sequelize);
    const grocery_meals_model = grocery_meals(sequelize);
    const grocery_meal_items_model = grocery_meal_items(sequelize);

    // Item location relationship
    grocery_locations_model.hasMany(grocery_items_model, { foreignKey: { name: 'location' }, onDelete: 'SET NULL' });
    grocery_items_model.belongsTo(grocery_locations_model, { foreignKey: { name: 'location' }, onDelete: 'NO ACTION' });

    // List meal relationship
    grocery_list_model.hasMany(grocery_meals_model, { foreignKey: { name: 'mealId' }, onDelete: 'NO ACTION' });
    grocery_meals_model.belongsTo(grocery_list_model, { foreignKey: { name: 'mealId' }, onDelete: 'CASCADE'});

    // List item relationship
    grocery_list_model.hasMany(grocery_items_model, { foreignKey: { name: 'itemId' }, onDelete: 'NO ACTION'});
    grocery_items_model.belongsTo(grocery_list_model, { foreignKey: { name: 'itemId' }, onDelete: 'CASCADE'});

    // Meal item relationship
    grocery_meals_model.belongsToMany(grocery_items_model, { through: grocery_meal_items_model, onDelete: 'NO ACTION' });
    grocery_items_model.belongsToMany(grocery_meals_model, { through: grocery_meal_items_model, onDelete: 'CASCADE' });

    return sequelize;
}