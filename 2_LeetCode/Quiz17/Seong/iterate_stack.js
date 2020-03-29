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

// Depth First Search (DFS __ stack __ iterate)
// 비교 작업 줄여 효율 상승
var rangeSumBST = function(root, L, R) {
    
    const stack = [];
    stack.push(root);
    let sum = 0;
    
    if(L === R) return L;
    

    while(stack.length){
        let cur = stack.pop();
        
        if(cur){
            if(L <= cur.val && cur.val <= R) sum += cur.val;
            // console.log(`${cur.val} ... ${sum}`);

            // cur 의 자식노드들 push()
                // cur.val 이 L 보다 작으면 cur.left  push 하지 않음
            if(cur.val >= L) stack.push(cur.left);
          

                // cur.val 이 R 보다 크면 cur.right  push 하지 않음
            if(cur.val <= R) stack.push(cur.right);
        }
    }
    
    return sum;
};


// Depth First Search (DFS __ stack __ iterate)
// 최초 코드임 __ 비교 작업이 너무 많아 효율이 낮음
var rangeSumBST = function(root, L, R) {
    
    const stack = [];
    stack.push(root);
    
    
    let foundL = false;
    let foundR = false;
    let sum = 0;
    
    if(L === R) return L;
    

    while(stack.length){
        let cur = stack.pop();
        
        if(L <= cur.val && cur.val <= R) sum += cur.val;
        // console.log(`${cur.val} ... ${sum}`);
        
        // found L / found R 체크
        if(cur.val === L) foundL = true;
        if(cur.val === R) foundR = true;
        
        // cur 의 자식노드들 push()
        if(cur.left) {
            // foundL true 일 때 left 값이 L 보다 작으면 stack 에 push 하지 않음
            if(!(foundL && cur.left.val < L)) stack.push(cur.left);
        }
        if(cur.right){
            // foundR true 일 때 right 값이 R 보다 크면 stack 에 push 하지 않음
            if(!(foundR && cur.right.val > R))stack.push(cur.right);
        }
    }
    
    return sum;
};

