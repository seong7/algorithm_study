# LeetCode 3384

## 3SUM

> [문제 출처](https://leetcode.com/problems/3sum/)

### 문제
```
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```


### 나의 코드

hashmap 을 사용해 시간 효율을 높여보려 했지만, 그래도 Time Limit Exceeded 에러가 발생한다.

```javascript
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
  // aswer 배열에 담기 전 중복되는 배열이 존재하는지 검사한다.
  const sortedTriplet = triplet.sort((a,b) => a - b);
  const joinedTriplet = sortedTriplet.join();
  const isAbleToAdd = !answerHashmap[joinedTriplet];
  
  if(isAbleToAdd){
      answer.push(triplet);
      answerHashmap[joinedTriplet] = true;
  };
}
```

### 다른 사람의 코드

```javascript
function threeSum(nums) {
	const results = []

  // nums 의 길이가 3 보다 적은 경우 빈 배열을 return
	if (nums.length < 3) return results
  
  // 오름차순으로 정렬을 해두면 풀이가 훨씬 쉬워진다.
  // 최소한 O(N^2) 시간이 걸릴 것을 알기에, 
  // O(NlogN) sort 연산은 큰 영향을 주지 않는 다고 생각할 수 있다.
	nums = nums.sort((a, b) => a - b)

  // 합의 target 값 정의
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {

    // `i` 는 오름차순 배열의 가장 왼쪽의 값 (가장 작은 값)
    // 만약 이 값이 0을 넘는다면 더 이상 오른쪽의 값들을 더해서 0 이 될 수 없다.
		if (nums[i] > target) break

		// 반복을 없애기 위해 이미 확인한 값은 넘기자. (i - 1 과 i 가 같을 경우)
		if (i > 0 && nums[i] === nums[i - 1]) continue

    // `j` 는 `i` 와 `k` 의 중간 값이다.
    // `i` 와 `k` 를 고정시켜둔채로 `j` 값을 증가 시킬 것이다.
		let j = i + 1

		// `k` 가장 오른쪽의 값이다.
    // `k` 는 매 회 1 씩 줄인다.
    let k = nums.length - 1
    

    // 요약하자면,
    // `i` : 0 자리부터 시작
    // `k` : 마지막 자리부터 시작
    // `j` : 둘 사이에서 움직임
    
    // `j` 와 `k` 는 아래의 로직을 통해 서로를 향해 움직인다.
    // `j` 와 `k` 가 만났을 때 `i` 를 증가 시킬 것이다.
    // 이 프로세스를 반복한다. 

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

      // 만약 target sum 에 만족하면 또 있을지 모르는 조합을 찾아 
      // `j` 를 증가 / `k` 를 감소 시킨다. (`i` 는 고정)
			if (sum === target) {
				// target sum 에 만족하는 3 Sum 을 저장
				results.push([nums[i], nums[j], nums[k]])

        // 이부분은 중요하다. 값이 중복될 수 있기 때문에 똑같은 3 sum 조합을 만들지 않으려면 아래의 과정이 필요함.
        // 아래 과정을 통해 동일한 값이 있다면 마지막 순서의 해당 값으로 pointer 를 이동한다.
        // (while 안에 while 이 있는 것이 보기 좋지 않지만 요소가 많은 loop 이 아니므로 그냥 쓴다.)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

        // `j` 는 증가 / `k` 는 감소 시켜서 다음 loop 으로 넘어간다.
				j++
				k--

      // 만약 sum 이 너무 작다면 `j` 만 증가시킨다. 
			} else if (sum < target) {
				j++

      // 만약 sum 이 너무 크면 `k` 만 감소시킨다.
			} else if (sum > target) {
				k--
			}
		}
	}

	return results
};
```