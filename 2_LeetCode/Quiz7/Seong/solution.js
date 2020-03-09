/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = new Array(nums.length);  // 미리 길이 정해주면 push 는 그 뒤부터 이루어짐
  for(let i = 0; i < nums.length; i++){
      result[nums[i]-1] = nums[i];
  }

  for(let i = 0; i < nums.length; i++) {
      if(!result[i]) result.push(i+1);
  }
  
  return result.splice(nums.length);
};