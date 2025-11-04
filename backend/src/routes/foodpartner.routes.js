const express = require('express');
const router = express.Router();
const foodpartnerController = require('../controllers/foodpartner.controller');
const authMiddleware = require('../middleware/auth.middleware');


// GET /api/food/foodpartner/:id [protected]
router.get('/:id',
    authMiddleware.authUserMiddleware,
    foodpartnerController.getFoodPartnerById
);



module.exports = router;    