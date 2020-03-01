function solution(s) {
  let arr = s.split('');

  let arrList = arr.sort((first, second) => second.charCodeAt(0) - first.charCodeAt(0));

  return arrList.join('');
}

function quickSort() {

}

console.log(solution('Zbcdefg'));