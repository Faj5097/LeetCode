/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let nodeFound = false;
  let nodeCloned = null;

  function helper(root) {
    if (!root || nodeFound) {
      return;
    }

    if (root.val === target.val) {
      nodeFound = true;
      nodeCloned = root;
    } else if (!nodeFound) {
      helper(root.right);
      helper(root.left);
    }
  }

  helper(cloned);
  return nodeCloned;
};
