describe('Match Game', function () {
  var numberCount = 10,
      stateSuccessMessage = 'Victory!',
      stateFailureMessage = 'Failure = (',
      stateInitialMessage = 'Game is going..';
      
  function hasClass(element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
  }

  beforeEach(function () {
    browser.get('http://127.0.0.1:5000/#/game');
  });

  it('should have initial status message: ' + stateInitialMessage, function () {
    expect(element(by.name('alert')).getText()).toEqual(stateInitialMessage); 
  });

  it('should have ' + numberCount +' numbers after initial load', function(){
    element.all(by.className('number')).count().then(function (count) {
      expect(count).toEqual(numberCount);
    });
  });

  it('should set .success class after click on Match number', function () {
    var match = element.all(by.name('true')).first().click();
    expect(hasClass(match, 'success')).toBeTruthy();
  });

  it('should set .failure class after click on Non-match number', function () {
    var match = element(by.name('')).click();
    expect(hasClass(match, 'failure')).toBeTruthy();
  });

  it('should set "' + stateSuccessMessage + '" text to h3[name="alert"] after all matches were clicked', function () {
    var matchesClicked = element.all(by.name('true')).each(function (match) {
      match.click();
    });

    matchesClicked.then(function () {
      expect( element(by.name('alert')).getText() ).toEqual(stateSuccessMessage);      
    });
  });

  it('should set "' + stateFailureMessage + '" text to h1 after any Non-match was clicked', function () {
    element.all(by.name('')).first().click();

    expect( element(by.name('alert')).getText() ).toEqual('Failure = (');
  });

  it('should refresh state of game after win via button[name:"refresh"] click', function () {
    var matchesClicked = element.all(by.name('true')).each(function (match) {
      match.click();
    });

    matchesClicked.then(function () {
      element(by.name('refresh')).click().then(function () {
        expect(element(by.name('alert')).getText()).toEqual(stateInitialMessage);
      });   
    });
  });

  it('should refresh state of game after failure via button[name:"refresh"] click to initial', function () {
    element(by.name('')).click().then(function () {
      element(by.name('refresh')).click().then(function () {
        expect(element(by.name('alert')).getText()).toEqual(stateInitialMessage); 
      });
    });
  });
});