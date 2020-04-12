function solution(number) {
  let arr = ["*\n", "* *\n"];

  if (number <= arr.length) {
    for (let i = 0; i < number; i++) {
      console.log(arr[i])
    }
  } else {
    for (let i = 2; i < number; i++) {
      console.log(arr[0]);
      console.log(arr[1]);
      if (i % 2 === 0) {
        console.log(arr[1])
      } else {
        console.log(arr[0])
      }
    }

  }
}

// console.log(solution(2));

function solution2(number) {
  let result = '';

  for (let i = 0; i < number * 2; i++) {
    if (i !== 0) {
      result += '\n';
    }
    if (i % 2 === 0) {
      for (let j = 0; j < number; j++) {
        if (j % 2 === 0) {
          result += '*';
        } else {
          result += ' ';
        }
      }
    } else {
      for (let j = 0; j < number; j++) {
        if (j % 2 === 0) {
          result += ' ';
        } else {
          result += '*';
        }
      }
    }
  }

  console.log(result);
}

console.log(solution2(6))