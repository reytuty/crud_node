const mongo = require('./mongo-connect')  ;
var schema = new mongo.Schema({
	customerId:{ type: Number },
	companyId:Number,
	rewardsNumber:String,
	name:String,
	email:String,
	createDate:{ type: Date, default: Date.now },
	dob:Date
}
, { collection: 'customers' });
 
schema.plugin(mongo.autoIncrement.plugin, 
	{model:"Customers", startAt:1,field: 'customerId'});
var Model = mongo.connection.model('Customers', schema);
module.exports = Model ;
