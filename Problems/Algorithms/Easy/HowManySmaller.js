/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j != i && nums[i] > nums[j]) {
        sum++;
      }
    }
    ans.push(sum);
  }
  return ans;
};
