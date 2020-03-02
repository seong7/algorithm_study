// isNaN : 성공
// !parseInt : 실패

function solution(s) {
    const sl = s.length;
    
    if(sl !== 4 && sl !== 6){
        // console.log(1);
        return false;  
    } 
    
    for(let i in s){
        // if(!parseInt(s[i])) {        // parseInt 로 검증 : 실패
        if(isNaN(s[i])) {               // isNan : 성공
             // console.log(2);
            return false;
        }
    }

    // console.log(3);
    return true;
}