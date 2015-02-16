var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, uniqueness: true, index: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	active: {type: Boolean, required: true}
});

module.exports = Mongoose.model('Product', schema);