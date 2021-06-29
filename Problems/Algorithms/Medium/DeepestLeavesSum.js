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
var deepestLeavesSum = function (root) {
  let sum = 0;
  let highestLvl = 1;

  function helper(root, lvl) {
    if (!root) {
      return;
    }

    helper(root.left, lvl + 1);
    helper(root.right, lvl + 1);

    if (lvl > highestLvl) {
      highestLvl = lvl;
      sum = root.val;
    } else if (lvl === highestLvl) {
      sum += root.val;
    }
  }

  helper(root, highestLvl);

  return sum;
};
