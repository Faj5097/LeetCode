/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if(!root1 && !root2){
        return null;
    }
    
    let val = 0;
    let left1 = null, left2 = null;
    let right1 = null, right2 = null;
    
    if(root1){
        val += root1.val;
        left1 = root1.left;
        right1 = root1.right;
    }
    
    if(root2){
        val += root2.val;
        left2 = root2.left;
        right2 = root2.right;
    }
    
    let node = new TreeNode(val);
    node.left = mergeTrees(left1, left2);
    node.right = mergeTrees(right1, right2);
    
    return node;
};