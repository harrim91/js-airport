describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });
  describe('#stormy', function() {
    it('returns true when rand over 0.9', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(weather.isStormy()).toBeTruthy();
    });

    it('returns false when rand over 0.8', function() {
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(weather.isStormy()).toBeFalsy();
    });

  });
});
