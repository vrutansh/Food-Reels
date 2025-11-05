const foodModel = require('../models/food.model');
const like = require('../models/likes.model');
const likeModel = require('../models/likes.model');
const saveModel = require('../models/save.model');
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

async function likeFoodItem(req, res) {
    const {foodId }= req.body;
    const user = req.user;

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId,
    })

    if (isAlreadyLiked) {
        await likeModel.deleteOne({
            user: user._id,
            food: foodId,
        });
        
        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: -1 },
        });

        res.status(201).json({
        message: "Food unliked successfully",
        like: like,
    }); 
    }

    const like = await likeModel.create({
        user: user._id,
        food: foodId,
    });

     await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: 1 },
        });

    res.status(201).json({
        message: "Food liked successfully",
        like: like,
    });

}

async function saveFood(req, res) {
    // Implementation for saving a food item goes here
     const {foodId }= req.body;
    const user = req.user;

    const isAlreadysaved = await saveModel.findOne({
        user: user._id,
        food: foodId,
    })

    if (isAlreadysaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId,
        }); 

        res.status(201).json({
        message: "Food unsaved successfully",
        })

        const save = await saveModel.create({
        user: user._id,
        food: foodId,
      });

    res.status(201).json({
        message: "Food saved successfully",
        save: save,
    });
    }
}
module.exports = {
    createFood,
    getAllFoodItems,
    likeFoodItem,
    saveFood,
};