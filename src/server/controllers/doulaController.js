const db = require('../models');

// Defining methods for the doulaController
module.exports = {
	// Find all doulas in the database
	findAll: function(req, res) {
		db.Doula
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	addDoula: function(req, res) {
		db.Doula
			.create(req.body.doula)
			.then(function(dbDoula) {
				res.json(dbDoula);
			})
		  	.catch(err => res.status(422).json(err));
	  },
};
