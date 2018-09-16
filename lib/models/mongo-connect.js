var dotenv = require('dotenv');
dotenv.load();

var mongoose = require('mongoose');



var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
 
var connection = mongoose.createConnection( process.env.MONGO_URL );
autoIncrement.initialize(connection);


module.exports = {mongoose,autoIncrement, connection} ;