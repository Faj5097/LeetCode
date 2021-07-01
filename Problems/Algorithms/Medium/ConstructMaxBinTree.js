/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  function helper(arr) {
    if (arr.length === 0) return null;

    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);

    console.log(maxIndex);

    return {
      val: arr[maxIndex],
      left: maxIndex === -1 ? null : helper(arr.slice(0, maxIndex)),
      right: maxIndex === -1 ? null : helper(arr.slice(maxIndex + 1))
    };
  }

  return helper(nums);
};
