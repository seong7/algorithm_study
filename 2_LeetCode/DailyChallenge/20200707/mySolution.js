/**
 * Example 1
 * Input: [1,2,3] 
 * Output: [1,2,4] 
 * Explanation: The array represents the integer 123.
 * 
 * Example 2
 * Input: [4,3,2,1] 
 * Output: [4,3,2,2] 
 * Explanation: The array represents the integer 4321.
 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let isDigitsOnly9 = true;
  
  for(let i = 0; i < digits.length; i++) {
      if (digits[i] !== 9) {
          isDigitsOnly9 = false;
          break;
      }
  }
  
  // digits 가 9 로만 이루어져 있는지 검증 후 그렇다면 [1, 0,0,0 ...] 의 새 배열을 만들어 return
  if(isDigitsOnly9) {
      const result = new Array(digits.length + 1).fill(0);
      result[0] = 1;
      return result;
      
  // 그렇지 않을 경우 digits 에 in-place 로 계산
  } else if (!isDigitsOnly9) {
      let accumulator = 1;
      for(let i = digits.length - 1; i >= 0; i--) {
          const newVal = digits[i] + accumulator;
          accumulator = newVal > 9 ? 1 : 0;
          digits[i] = newVal % 10;
      }
      
      return digits;
  }
  
};