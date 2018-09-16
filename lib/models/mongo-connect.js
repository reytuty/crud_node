var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
 
var connection = mongoose.createConnection("mongodb://localhost:27017/crud_renato_miawaki");
 
autoIncrement.initialize(connection);


module.exports = {mongoose,autoIncrement,Schema, connection} ;