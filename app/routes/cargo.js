module.exports = function(app) {
	
	var api = app.api.cargo;
	app.get('/cargos', api.lista);
};