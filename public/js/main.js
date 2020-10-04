angular.module('user', ['ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'partials/principal.html',
			controller: 'HomeController'
		});
		$routeProvider.when('/new', {
			templateUrl: 'partials/user.html',
			controller: 'UserController'
		});
		$routeProvider.when('/new/:userId', {
			templateUrl: 'partials/user.html',
			controller: 'UserController'
		});
		$routeProvider.otherwise({redirectTo: '/home'});
	});