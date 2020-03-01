function solution(s) {
    let loCase = [];
    let upCase = [];
    
    for (let i in s){
        s[i] < "a" ? upCase.push(s[i]) : loCase.push(s[i]);
    }
    
    const st = (str) => {
        return str.sort((a, b) => {
            // console.log(`${a} < ${b} : ${+(a < b)} || ${a} === ${b} : ${+(a === b) -1} `);
            // console.log(+(a < b) || +(a === b) -1)
            return +(a < b) || +(a === b) -1;           
        }).join("");
    }

    return st(loCase) + st(upCase);
}


// const test = "czeab";
// console.log(solution(test));
// console.log("-------------");

// const test2 = "ccccAzZzeCCab"
// console.log(solution(test2));
// console.log("-------------");