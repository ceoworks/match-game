'use strict';

var app = angular.module('matchApp');

app.controller('GameController', ['$scope', 'Gen',
  function($scope, Gen) {

    $scope.init = function() {
      $scope.data = Gen.generate();
    };

    $scope.init();
  }
]);