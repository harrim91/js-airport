'use strict';
function Plane() {

  this.ground = false;

  Plane.prototype.takeoff = function() {
    this.ground = false;
  }

  Plane.prototype.land = function() {
    this.ground = true;
  }

  Plane.prototype.ground = function() {
    return this.ground;
  }
}
