/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root) return null;   //기저조건
                // return; = return undefined;
                // return null; : 아무 것도 return 하지 않음
    
    const tmpNode = root.left;
    
    root.left = invertTree(root.right);
    root.right = invertTree(tmpNode);
    
    return root;
};