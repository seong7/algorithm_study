// 주어진 number내에 소수갯수 찾기

// 1. for문으로 구현
function solution(n) {
  let primeCount = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCount += 1;
    }
  }

  return primeCount;
}


// 2. Set으로 구현
function solution2(num) {
  let numSet = new Set();

  for (let i = 3; i <= num; i += 2) {
    numSet.add(i);
  }

  numSet.add(2);
  for (let j = 3; j <= Math.floor(Math.sqrt(num)); j++) {
    if (numSet.has(j)) {
      for (let k = j * 2; k <= num; k += j) {
        numSet.delete(k);
      }
    }
  }

  return numSet.size;
}


console.log(solution2(17));