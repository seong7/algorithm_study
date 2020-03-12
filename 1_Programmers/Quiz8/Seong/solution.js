// 주어진 문자열 s 의 각 알파벳을 n 만큼 다음 알파벳으로 전환하는 문제 

// O(N) solution
function solution(s, n) {
    var answer = '';
    // String s (길이 <= 8000)
    // 밀기 정도 n ( n <= 25, 자연수)
    
    // 알파벳 총 26 개
    const lowerArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperArry = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const lowerMap = setMap(lowerArry); //O(n)
    const upperMap = setMap(upperArry); //O(n)
    

    // 전체 s 순회 : O(N)
    // 각 문자 별로 Map 에서 index 값 찾기 : O(1)
    // => index + n 에 해당하는 값 Array 에서 search : O(1)
    
    for(let char of s){
        // 공백일 경우
        if(char === " "){
            answer += " ";
        }
        // 소문자일 경우
        else if(char > "Z"){
            answer += lowerArry[checkIndex(lowerMap.get(char) + n)];
        }
        // 대문자일 경우
        else{
            answer += upperArry[checkIndex(upperMap.get(char) + n)];
        }   
    }
    
    // Map 생성
    function setMap(arry){
        const newMap = new Map();
        arry.forEach((cur, i) => {
            newMap.set(cur, i);
        })
        return newMap;
    }
    
    // index 체크
    function checkIndex(n){
        return n > 25 ? n -= 26 : n;
    }
    
    return answer;
}



// O(N^2) solution
function solution(s, n) {
    var answer = '';
    const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // 알파벳 총 26 개
    
    // String s (길이 <= 8000)
    // 밀기 정도 n ( n <= 25, 자연수)
    
    // 각 문자 별로 indexOf -> idx 찾아 + n 값 search : O(N^2)
    for(let char of s){                                 // O(N)
        // 공백일 경우
        if(char === " "){
            answer += " ";
        }
        // 소문자일 경우
        else if(char > "Z"){
            answer += getNewChar(char, n, lower);      // O(N)
        }
        // 대문자일 경우
        else{
            answer += getNewChar(char, n, upper);      // O(N)
        }
        
    }

    function getNewChar(char, n, arry){
        let newIdx = arry.indexOf(char)+n;
        if(newIdx > 25) newIdx -= 26;
        return arry[newIdx];
    }

    return answer;
}
// console.log();
