'use strict';

var indexController = angular.module('IndexController', []);

indexController.controller('IndexController', ['$scope', 
  function ($scope) {
    $scope.numbers = [1,2,3,4,5,6,7,8,3,5];
    console.log('We\'ve loaded controller');
}]);