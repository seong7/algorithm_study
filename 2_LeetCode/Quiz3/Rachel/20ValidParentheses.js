// 자료구조 스택을 이용한 풀이
function solution(s) {

  const bracketMap = new Map();
  bracketMap.set('(', ')');
  bracketMap.set('[', ']');
  bracketMap.set('{', '}');

  const inputArr = s.split('');
  const stackArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if ((inputArr[i] === '(') || (inputArr[i] === '[') || (inputArr[i] === '{')) {
      stackArr.push(inputArr[i]);
    } else {
      if (bracketMap.get(stackArr[stackArr.length - 1]) === inputArr[i]) {
        stackArr.pop();
      } else {
        return false
      }
    }
  }
  return stackArr.length <= 0;

}

console.log(solution('((([[[{{}}]]])))'));