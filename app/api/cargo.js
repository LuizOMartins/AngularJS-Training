var mongoose = require('mongoose');

module.exports = function(app) {
    var api = {};
    var model = mongoose.model('cargos');

    api.lista = function(req, res) {
        console.log('BUSCANDO CARGOS');
        model.find()
		.then(function(cargos) {
            res.json(cargos);
            console.log(cargos);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
    };
    return api;

};