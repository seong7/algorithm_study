/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

// Depth First Search (DFS __  recursion)
// 가장 효율적
// 클로저는 효율에 좋지 않음 -> 재귀함수에도 매개변수로 상위 scope 의 변수 넣어주기
var rangeSumBST = function(root, L, R) {
    
    let sum = 0;
    recursion(root, L, R);
    
    if(L === R) return L;
    
    //recursion
    function recursion(node, L, R){
        // base case
        if(!node) return;
        
        if(node.val >= L && node.val <= R) sum += node.val;
        if(node.val >= L) recursion(node.left, L, R);
        if(node.val <= R) recursion(node.right, L, R);
    }
    return sum;
};