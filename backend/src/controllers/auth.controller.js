const userModel = require('../models/user.model');
const foodPartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// User Registration Controller
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isuseralreadyexist = await userModel.findOne({ email: email });
        if (isuseralreadyexist) {
            return  res.status(400).json({ message: "User already exists with this email" });
        }
        
         const hashedPassword = await bcrypt.hash(password, 10); 
            const user = await userModel.create({ 
                username, 
                email,
                password: hashedPassword
            });

            const token = jwt.sign({
                id: user._id,
            }, process.env.JWT_SECRET)

            res.cookie("token", token, )
             res.status(201).json({ 
                message: "User registered successfully", 
                user:{
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                }  
            });
            await user.save();        
        
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}


// User Login Controller 
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const userexist = await userModel.findOne({
         email: email,
        });


    if (!userexist) {
        return res.status(400).json({ message: "User does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, userexist.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({
        id: userexist._id,
    }, process.env.JWT_SECRET)

     res.cookie("token", token)
     res.status(200).json({
        message: "Login successful",
        user: { 
            _id: userexist._id,
            email: userexist.email,
            username: userexist.username,
        }
    });
}

// User Logout Controller
const logoutUser = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" }); 
    
}





// Food Partner Controllers can be added here in future

// Food Partner Registration Controller
 const registerFoodPartner = async (req, res) => {
    const { username, email, password } = req.body;

    const isFoodPartnerExist = await foodPartnerModel.findOne({ email: email });

    if (isFoodPartnerExist) {
        return res.status(400).json({ message: "Food Partner already exists with this email" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        username,
        email,
        password: hashedPassword
    });

     const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    await foodPartner.save();

    res.status(201).json({
         message: "Food Partner registered successfully",
         foodPartner:{
            _id: foodPartner._id,
            email: foodPartner.email,
            username: foodPartner.username,
         } }); 

    
    
}

// Food Partner Login Controller
    const loginFoodPartner = async (req, res) => {
    const { email, password } = req.body;

    const foodPartnerExist = await foodPartnerModel.findOne({
        email: email,
    });

    if (!foodPartnerExist) {
        return res.status(400).json({ message: "Food Partner does not exist" });

    }

    const isPasswordValid = await bcrypt.compare(password, foodPartnerExist.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({
        id: foodPartnerExist._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(200).json({
        message: "Login successful",
        foodPartner: {
            _id: foodPartnerExist._id,
            email: foodPartnerExist.email,
            username: foodPartnerExist.username,
        }
    });
}

// Food Partner Logout Controller
const logoutFoodPartner = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
};


