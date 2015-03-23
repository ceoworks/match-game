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
      status: '',
      duplicatesNumber: duplicatesNumber,
      checkMatches: function(firstMatchValue, firstMatchIndex) {
        if (this.duplicatesNumber > 0) {

          if (this.numbers[firstMatchIndex].match) {
            // player finds match
            var secondMatch = this.numbers.splice(firstMatchIndex, 1)[0];
            var secondMatchIndex = this.numbers.indexOf(secondMatch);
            this.numbers.splice(secondMatchIndex, 1);
            this.duplicatesNumber--;
          } else {
            // player loses
            this.numbers[firstMatchIndex].class = 'failure';
            this.duplicatesNumber = -1;
          }
        }

        this.checkStatus();
      },
      checkStatus: function() {
        switch (this.duplicatesNumber) {
          case 0:
            this.status = 'Victory';
            break;
          case -1:
            this.status = 'Game Over';
            break;
        }
      }
    };
  };
  this.randomise = function(number) {
    return Math.floor(Math.random() * number);
  };
});