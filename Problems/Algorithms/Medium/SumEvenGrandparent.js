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
var sumEvenGrandparent = function (root) {
  let sum = 0;

  function helper(root, grandpa, pa) {
    if (!root) {
      return;
    }

    if (grandpa !== null && grandpa % 2 === 0) {
      sum += root.val;
    }

    helper(root.left, pa, root.val);
    helper(root.right, pa, root.val);
  }

  helper(root, null, null);

  return sum;
};
