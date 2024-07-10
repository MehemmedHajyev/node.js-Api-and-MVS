const defaultRoute = require('./default-route');
const countryRoute = require('./country-route');
const eduRoute = require('./education-route');
const express = require('express');
const router = express.Router();

router.use('/',defaultRoute);
router.use('/countries',countryRoute);
router.use('/education',eduRoute);

module.exports = router;
