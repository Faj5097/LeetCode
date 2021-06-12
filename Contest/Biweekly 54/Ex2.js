/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let iC = 0;
  let i = 0;
  while (k >= 0) {
    iC = i % chalk.length;
    k -= chalk[iC];
    i++;
    // console.log(k);
  }

  return iC;
};

// console.log(chalkReplacer([22, 25, 39, 3, 45, 45, 12, 17, 32, 9], 835));
console.log(chalkReplacer([5, 1, 5], 22));
