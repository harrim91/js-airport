describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeoff']);
  });

  it('prevents landing when the capacity is full', function() {
    airport.land(plane);
    airport.land(plane);
    expect(function(){airport.land(plane); }).toThrowError("The airport is full");
  });
});
