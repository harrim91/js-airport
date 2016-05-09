describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('changes status when landing', function() {
    plane.takeoff();
    plane.land();
    expect(plane.ground).toBeTruthy();
  });

  it('changes status when taking off', function() {
    plane.land();
    plane.takeoff();
    expect(plane.ground).toBeFalsy();
  })

  it('starts in the air', function() {
    expect(plane.ground).toBeFalsy();
  })


});
