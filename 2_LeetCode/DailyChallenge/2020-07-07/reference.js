/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      const plusOne = digits[i] + 1;
      if (plusOne > 9) {
          digits[i] = 0;
      } else {
          digits[i] = plusOne;
          return digits;    // 10 이 안넘으면 앞으로도 쭉 더할 일이 없으미 바로 return
      }
  }
  
  // 위에서 return 안된 경우
  digits.unshift;
  return [1, ...digits];
};