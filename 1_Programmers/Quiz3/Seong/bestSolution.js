// 다른 사람의 solution 중 best

function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);        // && 의 기능 ?
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}