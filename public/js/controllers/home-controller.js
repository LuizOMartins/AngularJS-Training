angular.module('user')
.controller('HomeController', function($scope, $http, $resource) {
    $scope.itens = [];
    var baseUrl = '/user';

    $http.get(baseUrl).then(function(response) {
        $scope.itens = response.data;
        
    }, function(err) {
        console.log(err);
    });   
        
    $scope.remover = function(item) {
   
        $http({
            method: 'DELETE',
            url: '/user/' + item._id,
            data: {
                user: item._id
            },
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
        .then(function(response) {
            var aux = item._id;
            removeItem(aux);
            console.log(response);


        }, function(rejection) {
            console.log(rejection.data);
        });

    };


    function removeItem(id){
        $scope.itens.forEach(function (item, index) {
            console.log(item, index);
            if(item._id == id){
                console.log($scope.itens);
                $scope.itens.splice(index, 1);
            }
          });
        
    }

});