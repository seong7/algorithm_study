function solution(s) {
  const numberSet = new Set('0123456789');
  let tmp = true;

  if ((s.length === 4) || (s.length === 6)) {
    if (s[0] === '0') {
      return false;
    } else {
      for (let i = 0; i < s.length; i++) {
        tmp = numberSet.has(s[i]);
        if (!tmp) {
          return false;
        }
      }
    }
    return tmp
  } else {
    return false;
  }
}

console.log(solution2('1234'));