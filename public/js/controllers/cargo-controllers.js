angular.module('user')
.controller('CargoController', function($scope, $http, $resource) {
	$scope.offices = {};
	$scope.data = "CADASTRO";
	
	var resourceCargo = $resource('/cargos');
	resourceCargo.query().$promise.then(function(response) {
		console.log('BUSCANDO');
		$scope.offices = response;
		}, function(error) {
		console.log(error);
		});

});