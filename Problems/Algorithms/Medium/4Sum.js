/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let set = new Set();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            let arr = [];
            arr.push(nums[i]);
            arr.push(nums[j]);
            arr.push(nums[k]);
            arr.push(nums[l]);
            arr.sort((a, b) => a - b);
            if (!set.has(arr.toString())) {
              set.add(arr.toString());
              res.push(arr);
            }
          }
        }
      }
    }
  }

  return res;
};

console.log(fourSum([2, 2, 2, 2, 2], 8));
