function solution(nums) {
  let hash = {};
  for (let i = 0;i < nums.length;i++){
    hash[nums[i]] = 0;
  }
  for (let i = 0;i < nums.length;i++){
    hash[nums[i]] ++;
  }
  for (let name in hash){

    if(hash[name] > (nums.length/2)){
      let num = parseInt(name);
      return num;
    }

  }

}

console.log(solution([2,2,4,3,4,2,2,2]));