/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
  var i = 1;

  while (memory1 >= i || memory2 >= i) {
    if (memory1 >= memory2) {
      memory1 -= i;
    } else {
      memory2 -= i;
    }

    i++;
  }

  number = [i, memory1, memory2];
  return number;
};

console.log(memLeak(8, 11));
