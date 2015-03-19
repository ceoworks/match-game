'use strict';

var matchApp = angular.module('matchApp', [
  'ngRoute',
  'IndexController'
]);

matchApp.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/game', {
    templateUrl: 'static/partials/index.html',
    controller: 'IndexController'
  }).otherwise({
    redirectTo: '/game'
  });

}]);