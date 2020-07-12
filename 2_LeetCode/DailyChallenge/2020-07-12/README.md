# LeetCode 299665

## Subsets

> [문제 출처](https://leetcode.com/problems/subsets/)

### 문제

```
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

### 나의 코드

재귀를 이용해 풀어야한다는 것은 느꼈지만 결국 문제를 풀지 못했다.

```javascript
```

### 다른 사람의 코드

```javascript
function subsets(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    powerset.push(path);

    // for 문 안에서 재귀 호출을 해 모든 경우의 수를 실행했다.
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
}
```

### 배운점

1. **for 문 내에서 재귀 호출을 하는 것에 대한 로직 익혀두기**
   재귀의 새로운 사용법을 알게되었다. 위의 로직을 상세히 익혀두고 사용해봐야겠다.
