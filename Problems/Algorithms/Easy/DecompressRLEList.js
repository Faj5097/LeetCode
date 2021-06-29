/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i += 2) {
    let add = [];
    for (let j = 0; j < nums[i]; j++) {
      add.push(nums[i + 1]);
    }
    console.log(add);
    ans.push(...add);
  }

  return ans;
};
