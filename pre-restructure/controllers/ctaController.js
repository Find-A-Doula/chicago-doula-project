const db = require('../models');

// Defining methods for the ctaController
module.exports = {
	upsert: function(req, res) {
		console.log('upsert email');
		console.log(req.body);

		db.CTAEmail.findOneAndUpdate(
			{ email: req.body.email },
			{ $set: { email: req.body.email } },
			{ upsert: true, new: true }
		)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
