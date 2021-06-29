/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let prod = 1;
  let sum = 0;
  let arr = Array.from(String(n), Number);

  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
    sum += arr[i];
  }

  return prod - sum;
};
