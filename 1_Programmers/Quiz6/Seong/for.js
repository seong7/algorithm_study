// 실패 (원인 모르겠음)

function solution(s) {
    const sl = s.length;
    
    if(sl !== 4 && sl !== 6){
        // console.log(1);
        return false;  
    } 
    
    for(let i in s){
        if(!parseInt(s[i])) {
             // console.log(2);
            return false;
        }
    }

    // console.log(3);
    return true;
}