// 다른 사람의 solution 중 best

function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
        
        /* && 의 기능 ?
            - 비교 연산자 and 로 쓰였음
            - Array.prototype.push() 는 처리 후 배열의 길이 값을 return 함
            - 비교 연산에서는 값이 있으면 true / 없으면 false 로 인식함
            - 즉, 왼쪽의 비교 연산과 오른쪽의 처리 연산 모두 실행됨
        */
                                                
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}