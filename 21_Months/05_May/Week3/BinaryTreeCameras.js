/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  let resSum = 0;

  function helper(node) {
    if (!node) {
      return 0;
    }

    let nodeSum = helper(node.left) + helper(node.right);

    if (nodeSum === 0) {
      return 3;
    }
    if (nodeSum < 3) {
      return 0;
    }

    resSum++;
    return 1;
  }

  return helper(root) > 2 ? resSum + 1 : resSum;
};
