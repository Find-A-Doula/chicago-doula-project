const mongoose = require('mongoose');
const validator = require('validator');

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Creating object using Schema constructor
const ctaEmailSchema = new Schema({
	email: {
		type: String,
		trim: true,
		required: true,
		validate: [validator.isEmail, 'invalid email'] // Not working?
	},
	date: { type: Date, default: Date.now }
});

// Create model with above schema
const CTAEmail = mongoose.model('CTAEmail', ctaEmailSchema);

module.exports = CTAEmail;
