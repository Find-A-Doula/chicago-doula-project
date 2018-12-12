const mongoose = require('mongoose');

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Creating object using Schema constructor
const doulaSchema = new Schema({
	approved: { type: Boolean, default: 0},
	birthDoulaExperience: { type: [String] },
	birthDoulaStartDate: { type: String },
	bio: { type: String, required: true },
	certification: { type: [String], required: true },
	dateOfBirth: { type: String, required: true },
	doulaType: { type: [String], required: true },
	education: { type: [String], required: true },
	name: { type: String, required: true },
	photoPath: { type: String },
	postpartumDoulaExperience: { type: [String] },
	postpartumDoulaStartDate: { type: String },
	priceRangeMax: { type: Number, required: true },
	priceRangeMin: { type: Number, required: true },
	spokenLanguages: { type: [String], required: true },
	travelRange: { type: Number, required: true },
	zipCode: { type: String, trim: true, required: true },
	dateAdded: { type: Date, default: Date.now }
});

// Create model with above schema
const Doula = mongoose.model('Doula', doulaSchema);

module.exports = Doula;
