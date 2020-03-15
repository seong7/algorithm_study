const maxSubArray = function(nums) {
  const numsLen = nums.length;
  let curSum = nums[0];
  let maxSum = curSum;
  for (let i = 1; i < numsLen; i++) {
    curSum += nums[i];
    if (nums[i] > curSum) {
      curSum = nums[i];
    }
    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
};