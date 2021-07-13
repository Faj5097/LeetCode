/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  let arr = [];

  function helper(node, n) {
    if (n.length) {
      if (n.length === 2) {
        node.right = n[0];
        node.left = n[0];
      }
    } else {
    }
  }

  let node = new TreedNode(n[0]);
  n.shift();
  helper(n);
  return arr;
};
