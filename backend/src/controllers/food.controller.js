const foodModel = require('../models/food.model');

async function createFood(req, res){
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    res.send("Create Food Endpoint");

}

module.exports = {
    createFood,
}