/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let ans = 0;
  if (nums.length > 0) {
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        continue;
      } else if (nums[i] === nums[i - 1] + 1) {
        ++count;
      } else {
        if (count > ans) {
          ans = count;
        }
        count = 1;
      }
    }

    if (count > ans) {
      ans = count;
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
