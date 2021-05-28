/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let beginIndex = 0;
  let maxSum = 0;
  let subArr = [];
  for (let i = 0; i < nums.length; i++) {
    // console.log(subArr);
    // console.log(nums[i]);

    if (subArr.includes(nums[i])) {
      let sum = subArr.reduce((acc, curr) => acc + curr);
      beginIndex = beginIndex + subArr.indexOf(nums[i]);
      subArr = subArr.slice(subArr.indexOf(nums[i]) + 1);

      if (sum > maxSum) {
        maxSum = sum;
      }

      subArr.push(nums[i]);
    } else {
      subArr.push(nums[i]);
    }
  }

  let sum = subArr.reduce((acc, curr) => acc + curr);
  if (sum > maxSum) {
    maxSum = sum;
  }

  return maxSum;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
