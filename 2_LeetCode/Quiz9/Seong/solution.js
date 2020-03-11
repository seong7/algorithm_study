/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    /* 
        - 0 or 1 of depth differnece
        - input : sorted in ascending order
        - output : height balanced BST (in array)
    */
    // 중간 값 찾기
    // 왼쪽 sub tree 구현 / 오른쪽 sub tree 구현
    
    
    if(!nums.length) return null;
    
    const mid = Math.floor((nums.length/2));
    const root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    
    return root;
};
