var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Customer = require('./lib/models/customersModel');
var Product = require('./lib/models/productsModel');
var Order = require('./lib/models/ordersModel');

var App = Express();
var port = 9111;
var mongoUri = "mongodb://localhost:27017/ecommerce";

Mongoose.connect(mongoUri);
//optional
Mongoose.connection.once('open', function() {
	console.log("Connected to db at " + mongoUri);
});

App.use(BodyParser.json());

App.post('/api/customer', function(req, res) {
	Customer.create(req.body).then(function(response) {
		res.status(200).json(response);
	},
	function(err) {
		res.status(500).json(err);
	})
});

App.get('/api/customers', function(req, res) {
	Customer.find({}, function(err, docs) {
		if(!err) {
			if(docs.length === 0) {
				res.status(404).send("No documents found.");
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
});

App.post('/api/product', function(req, res) {
	Product.create(req.body).then(function(req, res) {
		res.status(200).json(response);
	},
	function(err) {
		res.status(500).json(err);
	})
});

App.get('/api/products', function(req, res) {
	Product.find({}, function(err, docs) {
		if(!err) {
			if(docs.length === 0) {
				res.status(404).send("No documents found.");
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
});

App.post('/api/order', function(req, res) {
	Order.create(req.body).then(function(req, res) {
		res.status(200).json(response);
	},
	function(err) {
		res.status(500).json(err);
	})
});

App.get('/api/orders', function(req, res) {
	Order.find({}, function(err, docs) {
		if(!err) {
			if(docs.length === 0) {
				res.status(404).send("No documents found.");
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
});


App.listen(port, function() {
	console.log("Now listening on port: " + port);
});
