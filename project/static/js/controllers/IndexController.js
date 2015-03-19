'use strict';

var indexController = angular.module('IndexController', []);

indexController.controller('IndexController', ['$scope', 'Gen', 
  function ($scope, Gen) {
    $scope.numbers = Gen.randomise();
}]);