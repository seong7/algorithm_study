// 존재하는 값을 음수로 바꿔 표시하는 방법 (절대값 이용)
var findDisappearedNumbers = function(nums) {
    let res = []
    nums.forEach((val, ind, arr) => {
        let tmp = Math.abs(arr[ind]) - 1;
        if (arr[tmp] > 0)
            arr[tmp] *= -1;
    })
    nums.forEach((val, ind) => {
        if (val > 0)
            res.push(ind + 1)
    })
    return res
};


// 따라 구현
var findDisappearedNumbers = function(nums) {
    const result = [];
    
    // 존재하는 수(index) 의 값을 음수로 변환
    nums.forEach((c, i, arry) => {
        if(arry[Math.abs(c)-1] > 0){
            arry[Math.abs(c)-1] *= -1;
        } 
    });
    
    // 양수인 값만 result 에 push
    nums.forEach((c, i)=>{
        if(c > 0) result.push(i+1); 
    });
    
    return result;
    
}