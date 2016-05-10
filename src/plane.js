'use strict';
function Plane() {

  this.isInAirport = false;

  Plane.prototype.takeOff = function() {
    this.isInAirport = false;
  }

  Plane.prototype.land = function() {
    this.isInAirport = true;
  }

}
