const axios = require('axios')
const router = require('express').Router()
const doulaController = require('../controllers/doulaController');

router.route('/').get(doulaController.findAll)
router.route('/').post(doulaController.addDoula)

module.exports = router