const authenticateUser = require('../../middlewares/auth');
const categoryRoute = require('./category-route');
const userRoute = require('./user-route');
const authRoute = require('./auth-route');
const countryRoute = require('./country-route');

const express = require('express');
const router = express.Router();

router.use('/users',userRoute);
router.use('/categories',categoryRoute);
router.use('/auth',authRoute);
router.use('/countries',countryRoute);

module.exports = router;