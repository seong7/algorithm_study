// 길이까지 제한
function solution(s) {
    
    if(s.match(/^\d{4}$|^\d{6}$/)) return true;  // 길이 4 또는 6 인 수

    return false;
}




// 길이 따로 분류 + not digit 
function solution2(s) {
    const sl = s.length;
    
    if(sl !== 4 && sl !== 6){
        return false;  
    } 
    
    if(s.match(/\D+/g)) return false;   // 수가 아닌 길이 1이상 문자

    return true;
}
