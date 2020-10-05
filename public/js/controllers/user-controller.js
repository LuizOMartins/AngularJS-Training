angular.module('user')
.controller('UserController', function($scope, $resource, $routeParams, $http) {

	$scope.user = {};
	$scope.mensagem = '';
    $scope.date = new Date();

	$scope.user.name = 'Nome';
	
    $scope.$watch('dateString', function (dateString) { $scope.date = new Date(dateString); });
	
	$scope.submeter = function() {
		if ($scope.formulario.$valid) {			
			$scope.user.age = $scope.date;
			$scope.user.office = $scope.user.office.trim();
			console.log($scope.user);
			$http.post('/user', $scope.user).success(function(response){
					console.log(response);
				}).error(function(error){
					console.log(error);
				});
			}

		}

});