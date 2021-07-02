/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let arr = [];

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(nums[i] + nums[nums.length - 1 - i]);
  }

  return Math.max(...arr);
};
