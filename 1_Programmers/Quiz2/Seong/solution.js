// test

function solution(n) {
  var answer = 1;
  let flag;

  for (let i = 3; i<=n; i++){
      // console.log(`i = ${i}--------------`);
      flag = false;
      for (let j=2; j<i; j++){
         
          if(i%j === 0) {
              flag = true;
              // console.log(`j = ${j}`);
              break;
          }  
      }
      if(!flag){
          answer++;
          // console.log(`answer = ${answer}`);
      }

  }
  
  return answer;
}




// failed

function solution(n) {
  let primeCnt = 0;

  if(n <= 10){
      
      for(let num = 2; num <= n; num++){
          if(num === 2 || num === 3 || num === 5 || num === 7){
              primeCnt++;
          }
      }
      
  }else{
      
      primeCnt = 4;
      for(let num = 11; num <= n; num++){
          if((num%2 !== 0 && num%3 !== 0 && num%5 !== 0 && num%7 !== 0) && (num%6 === 5 || num%6 ===1)){
              primeCnt++;
          }
      }
  } 

return primeCnt;
}





// Set

function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}




