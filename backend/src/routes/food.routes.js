const express =  require('express');

const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage(),
});
/*POST api/food/ [protected] */




router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single("video"), foodController.createFood);



module.exports = router;