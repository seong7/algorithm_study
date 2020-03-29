/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const answer = [];
    if(!root) return answer;
    
    function recur (node, arry = answer) {
        if(node){
            arry.push(node.val);
            node.children.forEach((c) => {recur(c);});
            return arry;
        }
    }
    
    return recur(root);
};