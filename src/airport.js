'use strict';

function Airport() {
  this._hangar = [];
  this.weather = new Weather();

  Airport.prototype.planes = function() {
    return this._hangar;
  };

  Airport.prototype.accept = function(plane) {
    if(this._hangar.length >= 2) {
      throw new Error("The airport is full");
    }
    if(this.weather.isStormy() === true) {
      throw new Error("It's too stormy to land");
    }
    plane.land();
    this._hangar.push(plane);
  };

  Airport.prototype.release = function(plane) {
    plane.takeOff();
    var i = this._hangar.indexOf(plane);
    this._hangar.splice(i, 1);
  };
}



var airport = new Airport();
var plane = new Plane();

console.log(airport.planes);
console.log(plane.ground);
airport.accept(plane);
console.log(airport.planes.length);
airport.accept(plane);
console.log(airport.planes.length);
console.log(airport.planes);
console.log(plane.ground);
console.log(airport.weather)
