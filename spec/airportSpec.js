'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeOff']);
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
