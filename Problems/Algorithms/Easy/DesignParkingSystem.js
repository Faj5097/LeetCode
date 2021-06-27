/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.small = small;
  this.medium = medium;
  this.big = big;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      return this.big > 0 ? this.big-- : false;
    case 2:
      return this.medium > 0 ? this.medium-- : false;
    case 3:
      return this.small > 0 ? this.small-- : false;
    default:
      break;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
