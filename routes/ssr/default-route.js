const express = require('express');
const router = express.Router();
const defaultController = require('../../controllers/ssr/default-controller');

router.get('/',defaultController.getDefaultView);

module.exports = router;