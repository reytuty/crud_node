var mongoose 		= require('./mongo-connect.js').mongoose;
var autoIncrement 	= require('./mongo-connect.js').autoIncrement;
var connection 		= require('./mongo-connect.js').connection;
var schema = new mongoose.Schema(
	{
		companyId:Number,
		name:{ type: String, required: true },
		createDate:{ type: Date, required: true, default: Date.now }
	}
	, { collection: 'company' }
);
schema.plugin(autoIncrement.plugin, 'Company');
module.exports = connection.model("Company", schema);
