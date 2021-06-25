/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  let arr = [];
  let decimal = hour - Math.floor(hour);

  for (let i = 0; i < dist.length; i++) {
    if (i === dist.length - 1) {
      decimal === 0 ? (arr[i] = 1) : (arr[i] = decimal);
    } else {
      arr[i] = 1;
    }
  }

  let hoursLeft = hour - arr.reduce((arr, com) => arr + com);

  while (hoursLeft > 0) {}

  if (hoursLeft < 0) {
    return -1;
  } else {
    return;
  }
};

console.log(minSpeedOnTime([1, 3, 2], 6));
console.log(minSpeedOnTime([1, 3, 2], 2.7));
console.log(minSpeedOnTime([1, 3, 2], 1.9));
