angular.module('user')
.controller('HomeController', function($scope, $http, $resource) {
    $scope.itens = [];
     
    var baseUrl = '/user';

    $http.get(baseUrl).then(function(response) {
        $scope.itens = response.data;
    }, function(err) {
        console.log(err);
    });

});