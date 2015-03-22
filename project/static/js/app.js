'use strict';

var matchApp = angular.module('matchApp', [
  'ngRoute',
  'GeneratorService'
]);

matchApp.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/game', {
    templateUrl: 'static/partials/index.html',
    controller: 'GameController'
  }).otherwise({
    redirectTo: '/game'
  });

}]);