describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('changes status when landing', function() {
    plane.takeOff();
    plane.land();
    expect(plane.isInAirport).toBeTruthy();
  });

  it('changes status when taking off', function() {
    plane.land();
    plane.takeOff();
    expect(plane.isInAirport).toBeFalsy();
  });

  it('starts in the air', function() {
    expect(plane.isInAirport).toBeFalsy();
  });

});
