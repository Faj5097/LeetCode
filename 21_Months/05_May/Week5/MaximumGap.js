/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  nums.sort((a, b) => a - b);

  let maxGap = 0;

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];

    if (diff > maxGap) {
      maxGap = diff;
    }
  }

  return maxGap;
};

console.log(maximumGap([3, 6, 9, 1]));
