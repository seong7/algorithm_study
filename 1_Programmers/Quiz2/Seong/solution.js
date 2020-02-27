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


function solution(n) {
  var answer = 1;

  // root n 값 구해서 값보다 큰 근사 값 중 6의 최소 배수 찾기
  
  // 해당 최소 배수부터 6을 텀으로 돌며 - +1 값 중 최소 소수 찾기 (페르마)
  
  // 2 ~ 해당 최소 소수까지 loop 으로 페르마 판별 -> 소수일 경우 배열 저장
  
  // 2~n 자연수 중 찾은 소수들의 배수들을 모두 제거해줌 (중복 값 주의)
  
  // 2, 3 주의 

  
  return answer;
}







