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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let res = null;
    
    function helper(r) {
        if(!r || res != null) return;
        
        if(r.val === val) {
            res = new TreeNode(val);
            res.left = r.left;
            res.right = r.right;
            return;
        }
        else {
            helper(r.left);
            helper(r.right)
        }
    }
    
    helper(root);
    
    return res;
};