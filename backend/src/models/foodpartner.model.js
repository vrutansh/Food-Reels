const mongoose = require('mongoose');
const foodPartnerSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true
    },

    contactName: { 
        type: String, 
        required: true,
    },
    phone: { 
        type: String, 
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: { 
        type: String, 
        required: true,
    },
    password: { 
        type: String,
    },

});

const foodPartnerModel = mongoose.model('foodpartner', foodPartnerSchema);

module.exports = foodPartnerModel;