// 1. for문으로 코딩
function solution1(arr, divisor) {
  let answer = [];
  let wrongAnswer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    } else {
      wrongAnswer.push(arr[i]);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort();
  }
  return answer = answer.sort((a, b) => a - b);
}

// 2. solution 1번에서 아쉬운 점 개선해서 Recoding (*wrongAnswer 없애기, *마지막에 sort을 해주는 부분을 if문으로 넣어보기
function solution2(arr, divisor) {
  const retArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      retArray.push(arr[i]);
    }
  }

  if (retArray.length === 0) {
    retArray.push(-1);
  } else {
    retArray.sort((a, b) => {
      return a - b;
    })
  }

  return retArray;
}

// 3. 필터로도 구현해보기
// 맵, 필터 등 배열의 고차원함수 차이에 대해 생각해보기
function solution3(arr, divisor) {
  const filteredArr = arr.filter(num => num % divisor === 0);

  if (filteredArr.length === 0) {
    filteredArr.push(-1);
  } else {
    filteredArr.sort((a, b) => a - b);
  }
  return filteredArr;

}


let arr = [3, 2, 6];
console.log(solution3(arr, 3));