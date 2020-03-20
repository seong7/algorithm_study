/**
 * @param {number} n
 * @return {string[]}
 */

 // O(N) / if-else  
var fizzBuzz = function(n) {
    const answer = [];
    
    for(let i = 1; i <= n; i++){
        // if(i % 3 === 0 && i % 5 === 0) answer.push("FizzBuzz");
        if(i % 15 === 0) answer.push("FizzBuzz");
        else if(i % 3 === 0) answer.push("Fizz");
        else if(i % 5 === 0) answer.push("Buzz");
        else{
            const num = i;
            answer.push(num.toString(10));
        }
    }
    return answer;
};

// console.log(fizzBuzz(15));


//  else 사용 안하기
var fizzBuzz = function(n) {
    const answer = [];
    
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0) {
            answer.push("FizzBuzz");
            continue;
        }
        if(i % 3 === 0) {
            answer.push("Fizz");
            continue;
        }
        if(i % 5 === 0) {
            answer.push("Buzz");
            continue;
        }
        if(i % 3 != 0 && i % 5 != 0) {
            answer.push(`${i}`);
            continue;
        }
    }   
    return answer;
};