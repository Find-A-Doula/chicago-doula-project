const path = require('path');
const router = require('express').Router();

const ctaRoutes = require('./cta');
const doulaRoutes = require('./doula');

// Routes
router.use('/cta', ctaRoutes)
router.use('/doula', doulaRoutes)

// If no routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../../../public/index.html'))
})

module.exports = router
