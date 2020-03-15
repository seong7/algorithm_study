/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let maxSoFar = -Infinity;
    
    nums.forEach((cur)=>{
        maxSoFar = Math.max(cur, cur + maxSoFar);      // 현재 요소와 현재 요소 + 지난 요소까지의 합 비교
        max = Math.max(maxSoFar, max);
    })
    
    return max;
};