angular.module('user')
.controller('UserController', function($scope, $resource, $routeParams, $http) {

	$scope.user = {};
	$scope.mensagem = '';
    $scope.date = new Date();

	
    $scope.$watch('dateString', function (dateString) { $scope.date = new Date(dateString); });
	
	$scope.submeter = function() {

		if ($scope.formulario.$valid) {			
			$scope.user.age = $scope.date;
			console.log($scope.user);

			// $http.post('/user', $scope.user).success(function(response){
			// 		console.log(response);
			// 	}).error(function(error){
			// 		console.log(error);
			// 		console.log("debugMe!");
			// 	});
			}

		}

});