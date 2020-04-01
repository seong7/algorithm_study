var singleNumber = function(nums) {
    let r = 0;
    for(let i = 0; i < nums.length;i++){
        r = r^nums[i];
    }
    return r
};