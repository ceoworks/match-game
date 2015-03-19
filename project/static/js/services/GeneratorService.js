'use strict';

var generatorService = angular.module('GeneratorService', []);

generatorService.service('Gen', function () {

  var matchesLength = 10,
  duplicatesNumber  = 2,
  numberDimension   = 10,
  originsNumber     = matchesLength - duplicatesNumber;


  this.randomise = function () {
    var numbers   = [],
    duplicates    = [];
    
    for (var i = 0; i < originsNumber; i++) {
      numbers[i] = { value: Math.floor( Math.random() * numberDimension ), match: undefined };
    }

    for (var i = 0; i < duplicatesNumber; i++) {
      var copy = numbers[ Math.floor( Math.random() * originsNumber ) ];
      copy.match = true;
      duplicates.push(copy);
    }
    
    return numbers.concat(duplicates);
  };
});