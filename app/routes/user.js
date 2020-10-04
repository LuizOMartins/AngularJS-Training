module.exports = function(app) {

	var api = app.api.user;

	app.route('/user')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/user/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId);
		// .put(api.atualiza);
};