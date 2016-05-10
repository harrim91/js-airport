describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
  });

  describe('Weather is not stormy', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.8);
    });

    it('can accept a plane', function() {
      airport.accept(plane);
      expect(airport.planes()).toContain(plane);
    });

    it('can release a plane', function() {
      airport.accept(plane);
      airport.release(plane);
      expect(airport.planes()).not.toContain(plane);
    });

    it('prevents landing when the capacity is full', function() {
      airport.accept(plane);
      airport.accept(plane);
      expect(function(){ airport.accept(plane); }).toThrowError("The airport is full");
    });

  });

  describe('Weather is stormy', function() {

    it('prevents landing when the weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(function(){ airport.accept(plane); }).toThrowError("It's too stormy to land");
    });

    it('prevents takeoff when the weather is stormy', function() {
      airport.accept(plane);
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(function(){ airport.release(plane); }).toThrowError("It's too stormy to take off");
    });

  });
});
