var mongoose = require('mongoose');
var fs = require('fs'); 

module.exports = function(app) {
    var api = {};
    var modelUser = mongoose.model('user');

    api.adiciona = function(req, res) {
		console.log('POST');
		modelUser.create(req.body)
		.then(function(user) {
			res.json(user);
		}, function(error) {
			console.log('Erro:', error);
			res.sendStatus(500);
		});
	};


	api.lista = function(req, res) {
		modelUser.find()
		.then(function(response) {
			// console.log(response);
			res.json(response);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

    };

    api.buscaPorId = function(req, res) {
		modelUser.findById(req.params.id)
		.then(function(user) {
			if (!user) throw new Error('Usuário não encontrada');
			res.json(user);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};
    
    api.removePorId = function(req, res) {
        modelUser.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

    return api;
};

