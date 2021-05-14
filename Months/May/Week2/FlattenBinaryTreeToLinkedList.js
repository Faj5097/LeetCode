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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  function helper(root) {
    if (!root) {
      return;
    }

    helper(root.right);
    helper(root.left);

    root.left = null;
    root.right = last;

    lastNode = root;
  }

  var lastNode = null;
  helper(root);
};
