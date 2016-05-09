'use strict';

function Airport() {
  this.planes = [];

    Airport.prototype.land = function(plane) {
      if(this.planes.length > 1) {
        throw new Error("The airport is full");
      }
      plane.land();
      this.planes.push(plane);
    }

}

// var airport = new Airport();
// var plane = new Plane();
//
// console.log(airport.planes);
// console.log(plane.ground)
// airport.land(plane);
// console.log(airport.planes.length)
// airport.land(plane);
// console.log(airport.planes.length)
// console.log(airport.planes);
// console.log(plane.ground);
