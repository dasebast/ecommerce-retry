var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	customer: {type: Schema.Types.ObjectId, ref: "Customer"},
	products: {type: Schema.Types.ObjectId, ref: "Product"},
	orderNumber: {type: Number, required: true, uniqueness: true},
	addresses: [{
		address: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		state: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}],
	paymentInfo: {type: String, required: true, enum: ['Credit Card', 'PayPal']},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	subTotal: {type: Number, required: true},
	salesTax: {type: String, required: true},
	total: {type: Number, required: true}
});

module.exports = Mongoose.model('Order', schema);


// {
// 	"customer": "54dd1a7b47721d5c3aac0c05",
// 	"products": "54dd8d6f010ca75c496c71c7",
// 	"orderNumber": 123,
// 	"addresses": [{
// 		"address": "123 Number Lane",
// 		"city": "Provo",
// 		"state": "Utah",
// 		"zip": "84601"
// 	}],
// 	"paymentInfo": "PayPal",
// 	"subTotal": 100,
// 	"salesTax": ".07",
// 	"total": 107
// }