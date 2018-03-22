const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const apiRoutes = require('./routes/apiRoutes');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static('client/build'));

// Use apiRoutes
// app.use('/api', apiRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reaction');

// Test route
app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start listening
app.listen(port, function() {
	console.log(`🌎 ==> Server now on port ${port}!`);
});
