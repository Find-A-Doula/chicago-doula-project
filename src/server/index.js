const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const webpack = require("webpack")
const webpackConfig = require("../../webpack.config")
const routes = require('./routes')

const compiler = webpack(webpackConfig)
const app = express()
const port = process.env.PORT || 8080

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure webpack hmr
// app.use(require("webpack-dev-middleware")(compiler, {
// 	noInfo: true,
// 	publicPath: webpackConfig.output.publicPath
// }))
// app.use(require("webpack-hot-middleware"))

// Serve up static assets
app.use(express.static(path.join(__dirname, '../../public')))
console.log(path.join(__dirname, '../../public'))

app.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "../../public/index.html"))
})

// Use routes
app.use(routes)

// Set up promises with mongoose
mongoose.Promise = global.Promise

// Connect to the Mongo DB
mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/chicagodoulaproject'), { useNewUrlParser: true })

// Start listening
app.listen(port, function() {
	console.log(`🌎 ==> Server now on port ${port}!`)
});
