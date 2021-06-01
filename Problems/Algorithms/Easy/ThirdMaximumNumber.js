/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arrNoDupl = Array.from(new Set(nums)).sort((a, b) => b - a);

  if (arrNoDupl.length >= 3) {
    return arrNoDupl[2];
  } else {
    return arrNoDupl[0];
  }
};

console.log(thirdMax([3, 1, 2]));
console.log(thirdMax([2]));
console.log(thirdMax([2, 2, 3, 1]));
