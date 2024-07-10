const express = require('express');
const router = express.Router();
const eduController = require('../../controllers/ssr/education-controller');

router.get('/',eduController.getEducationView);
router.get('/add',eduController.getEducationAddView);

module.exports = router;