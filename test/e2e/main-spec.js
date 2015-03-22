describe('Match Game', function () {
  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  beforeEach(function () {
    browser.get('http://127.0.0.1:5000/#/game');
  });

  it('should have 10 numbers after initial load', function(){
    element.all(by.className('number')).count().then(function (count) {
      expect(count).toEqual(10);
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

  it('should set "Victory!" text to h1[name="alert"] after all matches were clicked', function () {
    var matchesClicked = element.all(by.name('true')).each(function (match) {
      match.click();
    });

    matchesClicked.then(function () {
      expect( element(by.name('alert')).getText() ).toEqual('Victory!');      
    });
  });

  it('should set "Failure = (" text to h1 after any Non-match was clicked', function () {
    element.all(by.name('')).first().click();

    expect( element(by.name('alert')).getText() ).toEqual('Failure = (');
  });

});