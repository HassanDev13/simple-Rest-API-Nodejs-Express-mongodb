// Import express
let express = require('express')
// Import routes
let apiRoutes = require("./api-routes")
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// --------------------------------
// Initialize the app
let app = express();



// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/RestAPI', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");
    
// Setup server port
var port = process.env.PORT || 8080;
// Use Api routes in the App
app.use('/api', apiRoutes);
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});


// https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d