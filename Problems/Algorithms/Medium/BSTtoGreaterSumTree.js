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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let lastVal = 0;
  function helper(root) {
    if (!root) {
      return;
    }

    helper(root.right);

    root.val += lastVal;
    lastVal = root.val;

    helper(root.left);
  }

  helper(root, lastVal);

  return root;
};
