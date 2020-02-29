function solution1(str) {
  let isBlank = false;
  let toUppercaseArr = [];

  for (let i = 0; i < str.length; i++) {
    let idxValue = str[i];

    if (idxValue === " ") {
      isBlank = true;
      toUppercaseArr.push(" ");
    } else {
      if (!isBlank) {
        toUppercaseArr.push(idxValue.replace(idxValue, idxValue.toUpperCase()));
      } else {
        toUppercaseArr.push(idxValue.replace(idxValue, idxValue.toLowerCase()));
      }
    }
    isBlank = !isBlank;
  }
  return toUppercaseArr.join("");

}


function solution2(str) {
  let isCapital = true;
  let tmpResult = [];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') {
      isCapital = true;
      tmpResult.push(' ');
    } else {
      if (isCapital) tmpResult.push(str[i].toUpperCase());
      if (!isCapital) tmpResult.push(str[i].toLowerCase());
      isCapital = !isCapital;
    }
  }

  return tmpResult.join('');
}


const str = 'ggg ggggg gggg gg';
console.log(solution2(str));