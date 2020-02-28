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



