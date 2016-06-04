window.app = angular.module('ashmap', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

app.controller('MapCtrl', function($scope) {

	var marker;
	var bronxLatLong = [40.862452, -73.880238];

	var mymap = L.map('map-1').setView(bronxLatLong, 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'dorothym.0afd979a',
	accessToken: 'pk.eyJ1IjoiZG9yb3RoeW0iLCJhIjoiY2lwMWdrajhnMDB6cXowbTVrbWZpeGFuMiJ9.Oe9jFxnQ_1uLsqOhTwFIAg'
	}).addTo(mymap);

var treeArray = [["POINT (-73.85117181920485 40.817103597870826)","348047","10/19/2015 12:00:00 AM +0000","507707","16","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","Damage","NYC Parks Staff","Yes","No","No","No","No","No","No","No","No","2066 CICERO AVENUE","10473","Bronx","209","2","Bronx","18","87","34","BX09","Soundview-Castle Hill-Clason Point-Harding Park","2007400","New York","40.8171035979","-73.8511718192","1025444.69385","237005.007339"],
["POINT (-73.95917327149402 40.608116396837595)","301590","10/09/2015 12:00:00 AM +0000","210356","12","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","Damage","TreesCount Staff","No","No","No","Yes","No","Yes","Yes","No","No","1690 EAST  14 STREET","11229","Brooklyn","315","3","Brooklyn","48","45","17","BK25","Homecrest","3055400","New York","40.6081163968","-73.9591732715","995586.07082","160832.234488"],
["POINT (-73.9146294785939 40.706405809335415)","109461","08/01/2015 12:00:00 AM +0000","345194","7","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","Damage","Volunteer","Yes","No","No","No","No","No","Yes","No","No","","11385","Ridgewood","405","4","Queens","34","37","12","QN20","Ridgewood","4054500","New York","40.7064058093","-73.9146294786","1007919.3306","196650.70058"],
["POINT (-73.89652532102141 40.711819766950484)","238092","09/19/2015 12:00:00 AM +0000","345835","17","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","Damage","Volunteer","Yes","No","No","Yes","No","No","No","No","Yes","64-39 ADMIRAL AVENUE","11379","Middle Village","405","4","Queens","30","28","15","QN20","Ridgewood","4061301","New York","40.711819767","-73.896525321","1012936.45115","198628.577858"],
["POINT (-74.14206901983839 40.55752566184787)","244194","09/21/2015 12:00:00 AM +0000","415792","11","0","OnCurb","Alive","Fair","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","TreesCount Staff","No","No","No","No","No","No","No","No","No","172 EVERGREEN STREET","10308","Staten Island","503","5","Staten Island","51","62","24","SI54","Great Kills","5014606","New York","40.5575256618","-74.1420690198","944772.816475","142430.134481"],
["POINT (-73.95914712303757 40.644871027106355)","155435","08/18/2015 12:00:00 AM +0000","230995","10","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","TreesCount Staff","No","No","No","No","No","No","No","No","No","2022 BEVERLY ROAD","11226","Brooklyn","314","3","Brooklyn","40","42","21","BK42","Flatbush","3051400","New York","40.6448710271","-73.959147123","995587.086238","174222.92621"],
["POINT (-74.16408865043906 40.55238437629808)","511878","12/11/2015 12:00:00 AM +0000","413153","6","0","OnCurb","Alive","Fair","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","TreesCount Staff","No","No","No","No","No","No","No","No","No","211 RIDGEWOOD AVENUE","10312","Staten Island","503","5","Staten Island","51","62","24","SI54","Great Kills","5014604","New York","40.5523843763","-74.1640886504","938650.647617","140567.735975"],
["POINT (-74.00382505084204 40.73771150888877)","255104","09/24/2015 12:00:00 AM +0000","102152","13","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","Volunteer","No","No","No","No","No","No","No","No","No","321 WEST  4 STREET","10014","New York","102","1","Manhattan","3","66","27","MN23","West Village","1007700","New York","40.7377115089","-74.0038250508","983189.986688","208044.820509"],
["POINT (-73.94732892642934 40.72217048526816)","197177","09/02/2015 12:00:00 AM +0000","215846","11","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","Volunteer","No","No","No","No","No","No","No","No","No","559 GRAHAM AVENUE","11222","Brooklyn","301","3","Brooklyn","33","50","26","BK76","Greenpoint","3049900","New York","40.7221704853","-73.9473289264","998849.821182","202387.107087"],
["POINT (-73.95188822351754 40.782970797625836)","156706","08/18/2015 12:00:00 AM +0000","108138","5","0","OnCurb","Alive","Good","Fraxinus americana","White Ash","1or2","Harmful","NoDamage","Volunteer","No","No","No","No","No","No","Yes","No","No","163 EAST  92 STREET","10128","New York","108","1","Manhattan","5","73","28","MN40","Upper East Side-Carnegie Hill","1015801","New York","40.7829707976","-73.9518882235","997573.869666","224537.898415"]]

	var markerArray = [], item, i, popuptext = "";

	for (i = 0; i < treeArray.length; i++) {
		item = treeArray[i];

		popuptext = "Tree ID: " + item[1] + "<br>xpos: " + item[39] + "<br>ypos:" + item[40]

		marker = new L.marker([item[37],item[38]], {
			color: 'red'
		}).bindPopup(popuptext);

		markerArray.push(marker);
	}

	// markers.addLayers(array);

	var group = L.featureGroup(markerArray).addTo(mymap);
	mymap.fitBounds(group.getBounds());

/*
var group = L.featureGroup(markerArray).addTo(map);
map.fitBounds(group.getBounds());
*/
});

app.config(function ($stateProvider) {
    $stateProvider.state('map', {
        url: '/map',
        templateUrl: 'map.html',
        controller: 'MapCtrl'
    });
});

