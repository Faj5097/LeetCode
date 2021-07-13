/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let peak = -1;
  let i = 1;

  if (i === 0 && i + 1 < nums.length && nums[i] > nums[i + 1]) {
    peak = 0;
  }

  while (peak === -1 && i + 1 < nums.length) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peak = i;
    }
    i++;
  }

  if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
    peak = i;
  }

  return peak;
};
