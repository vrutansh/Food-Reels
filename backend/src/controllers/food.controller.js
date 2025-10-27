const foodModel = require('../models/food.model');
const  storageService  = require('../services/storage.service');

const { v4: uuid } = require('uuid');

async function createFood(req, res){

    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid());

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        createdBy: req.foodPartner._id,
    })

    console.log(fileUploadResult);

    res.status(201).json({
        message: "Food Item created successfully",
        foodItem: foodItem,
    });

}

async function getAllFoodItems(req, res) {
    const foodItems = await foodModel.find({});
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems: foodItems,
    });
}

module.exports = {
    createFood,
    getAllFoodItems,
}