/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }

  while (n !== 0 && n % 2 === 0) {
    n = n / 2;
  }

  while (n !== 0 && n % 3 === 0) {
    n = n / 3;
  }

  while (n !== 0 && n % 5 === 0) {
    n = n / 5;
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
};

console.log(isUgly(6));
