/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let valDupl = new Set();
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!valDupl.has(nums[i])) {
      if (set.has(nums[i])) {
        valDupl.add(nums[i]);
        set.delete(nums[i]);
      } else {
        set.add(nums[i]);
      }
    }
  }

  return set.size === 0 ? 0 : [...set].reduce((arr, curr) => arr + curr);
};
