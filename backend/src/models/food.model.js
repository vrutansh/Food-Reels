const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    description: { 
        type: String,
    },
    video: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodpartner',
        required: true,
    }
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;