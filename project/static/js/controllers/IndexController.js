'use strict';

var indexController = angular.module('IndexController', []);

indexController.controller('IndexController', ['$scope', 'Gen',
  function($scope, Gen) {

    init();

    $scope.checkMatches = function(index) {
      if ($scope.data.duplicatesNumber > 0) {

        if ($scope.data.numbers[index].match) {
          // player finds match
          $scope.data.numbers[index].status = 'success';
          $scope.data.duplicatesNumber--;
        } else {
          // player loses
          $scope.data.numbers[index].status = 'failure';
          $scope.data.duplicatesNumber = -1;
        }
      }

      $scope.checkStatus();
    };

    $scope.checkStatus = function() {
      switch ($scope.data.duplicatesNumber) {
        case 0:
          $scope.status.message = 'Victory!';
          break;
        case -1:
          $scope.status.message = 'Failure = (';
          break;
      }
      
    };

    $scope.refresh = function () {
      init();
    };

    function init() {
      $scope.data = Gen.generate();
      $scope.status = {
        message: 'Game is going..'
      };
    }

  }
]);