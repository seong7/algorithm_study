/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let numOfZeroes = 0;
  const initialLengthOfNums = nums.length;
  
  nums.forEach((c, i, arry) => {
      if(c === 0) numOfZeroes++;
      else arry.push(c);
  });
  
  for(let i=0; i<numOfZeroes; i++){
      nums.push(0);
  };
  
   nums.splice(0, initialLengthOfNums);
  
  return nums;
};