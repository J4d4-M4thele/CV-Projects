//Import Meals Model for database data  
const mealModel = require("../models/mealModel");
//menu controller takes the request, response and next object 
exports.getMenuController = async (req, res, next) => {
    const meals = mealModel.getMeals();
    await res.render("menu", { meals });
};