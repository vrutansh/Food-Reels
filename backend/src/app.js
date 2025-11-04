// create server

const express = require ('express');

const cookieParser = require('cookie-parser');

const app = express();

const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const foodPartnerRoutes = require('./routes/foodpartner.routes')

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173', // frontend origin
    credentials: true // to allow cookies to be sent
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/food', foodRoutes );
app.use('/api/foodpartner',foodPartnerRoutes);     
module.exports = app;