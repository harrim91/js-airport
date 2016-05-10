'use strict';

describe('Airport', function() {

  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',[''])
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear a plane for landing', function() {
    airport.permitLanding(plane);
    expect(airport.planes()).toContain(plane);
  });

});