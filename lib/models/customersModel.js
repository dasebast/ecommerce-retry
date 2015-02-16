var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true},
	email: {type: String, required: true, uniqueness: true, lowercase: true},
	addresses: [{
		address: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		state: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}],
	phone_numbers: [{
		number: {type: String, required: true},
		kind: {type: String, enum: ['Home', 'Work', 'Both'], default: 'Both'}
	}],
	password: {type: String, required: true},
	active: {type: Boolean, required: true}
});

module.exports = Mongoose.model('Customer', schema);