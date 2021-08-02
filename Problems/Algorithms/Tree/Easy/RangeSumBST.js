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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let res = 0;
    
    function helper(root){
        if(!root){
            return;
        }
        
        helper(root.left);
        helper(root.right);
        
        if(root.val >= low && root.val <= high){
            res += root.val;
        }
    }
    
    helper(root);
    
    return res;
};