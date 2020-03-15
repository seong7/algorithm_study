const maxSubArray = function (nums) {
  let curSum = nums[0];
  let maxSum = curSum;
  for (let i = 1; i < nums.length; i++) {
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