import { Sequelize, DataTypes } from 'sequelize';
import grocery_items from './grocery_items';
import grocery_lists from './grocery_lists';
import grocery_locations from './grocery_locations';
import grocery_meals from './grocery_meals';
import grocery_list_items from './grocery_list_items';
import grocery_meal_items from './grocery_meal_items';

export default (sequelize: Sequelize) => {
    const grocery_items_model = grocery_items(sequelize);
    const grocery_lists_model = grocery_lists(sequelize);
    const grocery_locations_model = grocery_locations(sequelize);
    const grocery_meals_model = grocery_meals(sequelize);
    const grocery_list_items_model = grocery_list_items(sequelize);
    const grocery_meal_items_model = grocery_meal_items(sequelize);

    // Item location relationship
    grocery_locations_model.hasMany(grocery_items_model, { foreignKey: 'location' });
    grocery_items_model.belongsTo(grocery_locations_model);

    // List meal relationship
    grocery_lists_model.belongsToMany(grocery_meals_model, { through: 'grocery_list_meals' });
    grocery_meals_model.belongsToMany(grocery_lists_model, { through: 'grocery_list_meals' });

    // List item relationship
    grocery_lists_model.belongsToMany(grocery_items_model, { through: grocery_list_items_model });
    grocery_items_model.belongsToMany(grocery_lists_model, { through: grocery_list_items_model });

    // Meal item relationship
    grocery_meals_model.belongsToMany(grocery_items_model, { through: grocery_meal_items_model });
    grocery_items_model.belongsToMany(grocery_meals_model, { through: grocery_meal_items_model });

    return sequelize;
}