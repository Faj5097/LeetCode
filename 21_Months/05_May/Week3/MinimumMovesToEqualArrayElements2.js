/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  //   var sumNums = nums.reduce((acc, curr) => acc + curr);
  //   var goalValue = Math.round(sumNums / nums.length);

  nums.sort((a, b) => a - b);
  //   console.log(nums);
  //   console.log(nums.length);

  var goalValue = 0;
  if (nums.length % 2 === 0) {
    var leftMedian = nums[nums.length / 2 - 1];
    var rightMedian = nums[nums.length / 2];
    // console.log(leftMedian);
    // console.log(rightMedian);
    goalValue = Math.round((rightMedian + leftMedian) / 2);
  } else {
    goalValue = nums[Math.floor(nums.length / 2)];
  }

  //   console.log(goalValue);
  var res = 0;

  nums.forEach((element) => {
    res += Math.abs(goalValue - element);
  });

  return res;
};

// console.log(minMoves2([1, 10, 2, 9]));
// console.log(minMoves2([1, 0, 0, 8, 6]));
console.log(minMoves2([3, 0, 6, 2, 4, 7, 0, 0]));
