const foodPartnerModel = require('../models/foodpartner.model');
const foodModel = require('../models/food.model');
async function getFoodPartnerById(req, res) {
    try {
        const foodPartnerId = req.params.id;
        const foodItemsByFoodpartner = await foodModel.find({ foodPartner: foodPartnerId });
        const foodPartner = await foodPartnerModel.findById(foodPartnerId);

        if (!foodPartner) {
            return res.status(404).json({ message: 'Food partner not found' });
        }           
        res.status(200).json({
            message: 'Food partner fetched successfully',
            foodPartner:{
                ...foodPartner.toObject(),
                foodItems: foodItemsByFoodpartner
            }
             });
    } catch (error) {
        console.error('Error fetching food partner by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }  
}

module.exports = {
    getFoodPartnerById,
};