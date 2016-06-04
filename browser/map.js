window.app = angular.module('ashmap', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

app.controller('MapCtrl', function($scope, TreeDataFactory) {

	var treeArray = TreeDataFactory.treeArray;

	var marker;
	var bronxLatLong = [40.862452, -73.880238];

	var mymap = L.map('map-1').setView(bronxLatLong, 13);



	var markerArray = [], item, i, popuptext = "", treeArrayLength = treeArray.length;

	for (i = 0; i < treeArrayLength; i++) {
		console.log("working",i)
		item = treeArray[i];

		popuptext = "Tree ID: " + item[1] + "<br>xpos: " + item[39] + "<br>ypos:" + item[40]

		marker = new L.marker([item[37],item[38]], {
			color: 'red'
		}).bindPopup(popuptext);

		markerArray.push(marker);
	}

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'dorothym.0afd979a',
	accessToken: 'pk.eyJ1IjoiZG9yb3RoeW0iLCJhIjoiY2lwMWdrajhnMDB6cXowbTVrbWZpeGFuMiJ9.Oe9jFxnQ_1uLsqOhTwFIAg',
	featureGroup: markerArray
	}).addTo(mymap);

	// var group = L.featureGroup(markerArray).addTo(mymap);
	// mymap.fitBounds(group.getBounds());

});

app.config(function ($stateProvider) {
    $stateProvider.state('map', {
        url: '/map',
        templateUrl: 'map.html',
        controller: 'MapCtrl'
    });
});
