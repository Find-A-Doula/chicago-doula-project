const axios = require('axios');
const router = require('express').Router();
const ctaController = require('../controllers/ctaController');

// upsert checks if an email exists, if not creates a new one
router.route('/').post(ctaController.upsert);

module.exports = router;
