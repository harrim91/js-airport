'use strict';

describe('Feature Spec', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can land at airports', function() {
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  });
});