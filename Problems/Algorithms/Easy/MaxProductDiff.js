/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  console.log(nums);

  let len = nums.length;
  let num1 = nums[len - 1];
  let num2 = nums[len - 2];
  let num3 = nums[1];
  let num4 = nums[0];

  return num1 * num2 - num3 * num4;
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
