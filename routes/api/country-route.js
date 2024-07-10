const countryController = require('../../controllers/api/country-controller');
const express = require('express');
const router = express.Router();

router.get('/getall',countryController.getAllCountries);
router.post('/add',countryController.addCountry);

module.exports = router;