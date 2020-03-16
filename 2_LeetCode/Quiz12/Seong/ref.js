// 비트연산 1
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let carry;
  
  while(b) {
      carry = a & b;
      a ^= b;
      b = carry << 1;
  }
  
  return a;
};




// 비트연산 2
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (b === 0) return a;
  return getSum(a ^ b, (a & b) << 1);
};


