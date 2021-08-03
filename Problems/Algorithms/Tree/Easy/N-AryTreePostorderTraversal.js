/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let res = [];
    
    function helper(r) {
        if(!r) return;
        
        if(r.children.length > 0) {
            r.children.map(c => helper(c));
        }
        
        res.push(r.val);
    }
    
    helper(root);
    
    return res;
};