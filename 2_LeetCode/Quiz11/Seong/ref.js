// 1
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}




// 2
var maxSubArray = function(nums) {
  let maxSoFar = -Infinity
  let max = -Infinity

  
  for(let i = 0 ;i < nums.length; i++){
      let current = nums[i]
      maxSoFar = Math.max(current, current + maxSoFar)
      max = Math.max(max, maxSoFar)
  }
  return max
};


