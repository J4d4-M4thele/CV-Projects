//Keep the meals data inside of an Array (in Real World this would be saved in a database)
const meals = [
    { name: "MilkShake", type: "breakfast", price: 8 },
    { name: "Lasanga", type: "lunch", price: 20 }
];
//Allow the Controller to access and fetch the meals meanu
exports.getMeals = () => {
    return meals;
};