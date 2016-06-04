window.app = angular.module('ashmap', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

app.controller('MapCtrl', function($scope) {
	$scope.foo = "bar";
	var mymap = L.map('map-1').setView([40.862452, -73.880238], 13);


	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'dorothym.0afd979a',
	accessToken: 'pk.eyJ1IjoiZG9yb3RoeW0iLCJhIjoiY2lwMWdrajhnMDB6cXowbTVrbWZpeGFuMiJ9.Oe9jFxnQ_1uLsqOhTwFIAg'
	}).addTo(mymap);

	var marker = L.marker([40.862452, -73.880238]).addTo(mymap);

	var circle = L.circle([40.85, -73.89], 400, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
	}).addTo(mymap);

	// var polygon = L.polygon([
	// [40.862552, -73.880400],
	// [40.862652, -73.880300],
	// [40.862752, -73.880200]
	// ]).addTo(mymap);

	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");
	// polygon.bindPopup("I am a polygon.");

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