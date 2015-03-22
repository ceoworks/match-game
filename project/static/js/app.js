'use strict';

var app = angular.module('matchApp', [
  'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/game', {
    templateUrl: 'static/partials/index.html',
    controller: 'GameController'
  }).otherwise({
    redirectTo: '/game'
  });

}]);