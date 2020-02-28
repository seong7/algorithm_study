//Selection Sort (선택정렬) 사용

function solution(arr, divisor) {
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
        
        for(let i = 0; i < answer.length; i++){
            smallest = answer[i];
            for(let j=i+1; j < answer.length; j++){
                if(answer[j] < smallest){
                    smallest = answer[j];
                    answer[j] = answer[i];
                }
            }
            answer[i] = smallest;
        }
    }
    
    return answer;
}


console.time("solution");
solution([1, 2, 3, 80, 22, 44, 78, 5, 34, 24, 36], 2)
console.timeEnd("solution");