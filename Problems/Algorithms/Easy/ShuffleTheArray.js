/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr = new Array(nums.length);
  let x = 0;
  let y = n;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      arr[i] = nums[x];
      x++;
    } else {
      arr[i] = nums[y];
      y++;
    }
  }

  return arr;
};
