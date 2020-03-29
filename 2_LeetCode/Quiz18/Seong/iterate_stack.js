// Stack 을 사용해 iterate 방식으로 구현 
var preorder = function(root) {
    const stack = [];
    const answer = [];
    if(!root) return answer;
    
    stack.push(root);
    
    while(stack.length){
        let cur = stack.pop();
        answer.push(cur.val);
        
        for(let i = cur.children.length-1; i >= 0; i--){
            stack.push(cur.children[i]);
        }
    }
    
    return answer;
};