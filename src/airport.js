'use strict';

function Airport() {
  this._hangar = [];
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.accept = function(plane) {
  if(this._hangar.length >= 2) {
    throw new Error("The airport is full");
  }
  plane.land();
  this._hangar.push(plane);
}

Airport.prototype.release = function(plane) {
  plane.takeOff();
  var i = this._hangar.indexOf(plane);
  this._hangar.splice(i, 1);
};


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
