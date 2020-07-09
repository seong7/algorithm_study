// 배열 nums 내 세 요소의 합이 0 인 조합들로 구성된 배열들을 담은 이중 배열을 return 하는 문제


// 첫 풀이 : 시간 문제에서 탈락 (O(N^3))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const answer = new Array();
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              if (nums[i] + nums[j] + nums[k] === 0) addToAnswer(answer, [nums[i], nums[j], nums[k]]);
          }
      }
  }
  return answer;
};

/**
* @param {number[]} triplet
*/
function addToAnswer (answer, triplet) {
  const sortedTriplet = triplet.sort((a,b) => a - b);
  const joinedTriplet = sortedTriplet.join();
  const isAbleToAdd = answer.every((c) => {
      return c.join() !== joinedTriplet;
  })
  
  if(isAbleToAdd) answer.push(triplet);
}






// 두번째 풀이

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const numsHashmap = nums.reduce((acc, c) => {
      acc[c] = acc[c] ? acc[c] + 1 : 1;
      return acc;
  }, {})
  
  const answerHashmap = {}; 
  const answer = new Array();
  
  for (let i = 0; i < nums.length; i++) {     
      numsHashmap[nums[i]]--;
  
      let j = i + 1;
      while(j < nums.length) {
          j++;
          numsHashmap[nums[j]]--;
          
          const left = 0 - (nums[i] + nums[j]);
          if (numsHashmap[left]) addToAnswer(answerHashmap, answer, [nums[i], nums[j], left]);
          
          numsHashmap[nums[j]]++;
      }
      numsHashmap[nums[i]]++;
  }
  
  return answer;
};

/**
* @param {number[]} triplet
*/
function addToAnswer (answerHashmap, answer, triplet) {
  const sortedTriplet = triplet.sort((a,b) => a - b);
  const joinedTriplet = sortedTriplet.join();
  const isAbleToAdd = !answerHashmap[joinedTriplet];
  
  if(isAbleToAdd){
      answer.push(triplet);
      answerHashmap[joinedTriplet] = true;
  };
}