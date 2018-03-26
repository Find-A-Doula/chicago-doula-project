const mongoose = require('mongoose');

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Creating object using Schema constructor
const ctaEmailSchema = new Schema({
	email: {
		type: String,
		required: true,
		match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
	},
	date: { type: Date, default: Date.now }
});

// Create model with above schema
const CTAEmail = mongoose.model('CTAEmail', ctaEmailSchema);

module.exports = CTAEmail;
