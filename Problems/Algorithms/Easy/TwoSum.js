/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

var twoSum = function (nums, target) {
  const indices = {};

  nums.forEach((item, index) => {
    indices[item] = index;
  });

  return indices;
};

console.log(twoSum([3, 2, 3], 6));
