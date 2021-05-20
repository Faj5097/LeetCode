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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var map = new Map();
  var lvl = 1;

  function helper(root, lvl) {
    if (!root) {
      return;
    }

    var arr;
    if (typeof map.get(lvl) !== "undefined") {
      arr = map.get(lvl);
    } else {
      arr = new Array();
    }
    arr.push(root.val);
    map.set(lvl, arr);

    lvl++;
    helper(root.left, lvl);
    helper(root.right, lvl);
  }

  helper(root, lvl);
  return Array.from(map.values());
};
