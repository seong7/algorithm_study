// string 변환으로 풀기

function solution(s) {
    let result = "";
    let currentIdx = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){           // string [i]  == string.charAt(i)
            result += " ";
            currentIdx = 0;
        } else {
            result += s[i][currentIdx % 2 === 0 ? "toUpperCase" : "toLowerCase"]();     // 동적으로 fn 사용
            currentIdx++;
        }        
    }
    return result;
}