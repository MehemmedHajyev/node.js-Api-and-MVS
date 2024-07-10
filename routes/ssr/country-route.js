const express = require('express');
const router = express.Router();
const countryController = require('../../controllers/ssr/country-controller');

router.get('/',countryController.getCountryView);
router.get('/add',countryController.getCountryAddView);
router.get('/edit/:id',countryController.getCountryEditView);
router.get('/delete/:id',countryController.deleteCountry);
router.post('/add',countryController.addCountry);
router.post('/edit',countryController.updateCountry);



module.exports = router;