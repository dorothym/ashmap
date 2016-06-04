window.app = angular.module('ashmap', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

app.controller('MapCtrl', function($scope) {
	$scope.foo = "bar"
});

app.config(function ($stateProvider) {
    $stateProvider.state('map', {
        url: '/map',
        templateUrl: 'map.html',
        controller: 'MapCtrl'
    });
});

// app.factory('MapFactory', function ($http) {
// 	return MapFactory;
// });