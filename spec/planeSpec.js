describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('changes status when landing', function() {
    plane.takeoff
    plane.land
    expect(plane.ground).toBeTruthy();
  });
});
