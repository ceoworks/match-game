'use strict';

var app = angular.module('matchApp');

app.service('Gen', function() {

  var matchesNumber = 10,
    capacityNumber = 10,
    duplicatesNumber = 2,
    uniqueNumbers = capacityNumber - duplicatesNumber*2;

  this.generate = function() {
    var numbers = [],
      duplicates = [],
      randomArray = [],
      random = this.randomise(capacityNumber);

    //generating unique numbers
    for (var i = 0; i < uniqueNumbers; i++) {
      while (randomArray.indexOf(random) > -1) {
        random = this.randomise(capacityNumber);
      }

      randomArray[i] = random;
      numbers[i] = {
        value: random,
        match: undefined
      };
    }

    // creating of duplicates
    for (var i = 0; i < duplicatesNumber; i++) {
      while (randomArray.indexOf(random) > -1) {
        random = this.randomise(capacityNumber);
      }
      randomArray.push(random);

      var duplicate = { 
        value: random,
        match: true
      };
      
      numbers.splice(this.randomise(numbers.length), 0, duplicate);
      numbers.splice(this.randomise(numbers.length), 0, duplicate);
    }

    return {
      numbers: numbers,
      duplicatesNumber: duplicatesNumber
    };
  };
  this.randomise = function(number) {
    return Math.floor(Math.random() * number);
  };
});