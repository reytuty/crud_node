const mongo = require('./mongo-connect')  ;
var schema = new mongo.Schema({
	name:{ type: String, required: true },
	createDate:{ type: Date, default: Date.now }
}
, { collection: 'company' });
 
schema.plugin(mongo.autoIncrement.plugin, {model:"Company", startAt:1});
var Model = mongo.connection.model('Company', schema);
module.exports = Model ;
