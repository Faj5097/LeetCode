/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  let len = stones.length;
  let maxBob = stones.length % 2;
  let sum = stones.reduce((arr, curr) => arr + curr);

  let val = 0;
  let i = 1;
  let diff = 0;
  while (len > 0) {
    // console.log("---NEW ROUND---");

    if (i % 2) {
      if (sum - stones[0] >= sum - stones[len - 1]) {
        val = stones[0];
        sum -= stones[0];
        diff += sum;
        stones.shift();
      } else {
        val = stones[len - 1];
        sum -= stones[len - 1];
        diff += sum;
        stones.pop();
      }
      console.log("ALICE (" + val + ") ->" + sum);
    } else {
      if (!maxBob || len === 2) {
        if (sum - stones[0] >= sum - stones[len - 1]) {
          val = stones[0];
          sum -= stones[0];
          diff -= sum;
          stones.shift();
        } else {
          val = stones[len - 1];
          sum -= stones[len - 1];
          diff -= sum;
          stones.pop();
        }
      } else {
        if (sum - stones[0] < sum - stones[len - 1]) {
          val = stones[0];
          sum -= stones[0];
          diff -= sum;
          stones.shift();
        } else {
          val = stones[len - 1];
          sum -= stones[len - 1];
          diff -= sum;
          stones.pop();
        }
      }
      console.log("BOB (" + val + ") ->" + sum);
    }
    len--;
    i++;
  }

  return diff;
};

// console.log(stoneGameVII([5, 3, 1, 4, 2]));
// console.log(stoneGameVII([7, 90, 5, 1, 100, 10, 10, 2]));
console.log(
  stoneGameVII([
    721, 979, 690, 84, 742, 873, 31, 323, 819, 22, 928, 866, 118, 843, 169, 818,
    908, 832, 852, 480, 763, 715, 875, 629
  ])
);
