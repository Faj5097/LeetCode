/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (!preorder.length) return null;
  let node = new TreeNode(preorder[0]);
  node.left = bstFromPreorder(preorder.filter((el) => el < preorder[0]));
  node.right = bstFromPreorder(preorder.filter((el) => el > preorder[0]));
  return node;
};
