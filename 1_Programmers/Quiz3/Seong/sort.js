// sort() 사용

function solution2(arr, divisor) {
    const answer = [];
    let smallest = 0;
    
    arr.forEach((el)=>{
        if(el % divisor === 0){
            answer.push(el);
        }
    })
    
    if(answer.length === 0){
        answer.push(-1);
    }else{
        answer.sort((a, b) => a - b);
    }
    return answer;
}

console.time("solution2");
solution2([1, 2, 3, 80, 22, 44, 78, 5, 34, 24, 36], 2)
console.timeEnd("solution2");