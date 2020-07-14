# LeetCode 3388

## Subsets

> [문제 출처](https://leetcode.com/problems/subsets/)

### 문제

```
Reverse bits of a given 32 bits unsigned integer.



Example 1:

Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

### 나의 코드

비트연산 없이 문자열 비교를 통해 풀었다.
시간 복잡도 O(N)

32 중 16까지만 loop 돌며 상반되는 왼쪽과 오른쪽 값을 바꾸었다.

```javascript
var reverseBits = function (n) {
  const bin = n.toString(2);
  let firstHalf = "";
  let lastHalf = "";
  let count = 1;
  let i = bin.length - 32;

  while (count < 17) {
    let left = bin[i] === undefined ? "0" : bin[i];
    let right =
      bin[bin.length - count] === undefined ? "0" : bin[bin.length - count];

    firstHalf += right;
    lastHalf = left + lastHalf;

    count++;
    i++;
  }

  return parseInt(firstHalf + lastHalf, 2);
};
```

### 다른 사람의 코드

비트연산을 통해 간단하게 풀었다.
시간은 O(N)

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var result = 0;
  var count = 32;

  while (count--) {
    // 32 -> 1 까지 loop
    // result 의 비트 값을 한칸씩 왼쪽으로 이동시킨다.
    // (<< 1 연산자 안쓰는 이유는 32비트 범위를 넘어선 값이 소멸되면 결과 값이 달라지기 때문)
    result *= 2;

    // n 의 비트 값과 0000....001 을 & 연산하면
    // n 비트 값의 끝자리가 그대로 나온다. (나머지는 0)
    result += n & 1;

    // n 의 끝자리를 위에서 사용했으므로 한칸씩 오른쪽으로 이동
    // (원래의 끝자리는 소멸된다.)
    n = n >> 1;
  }
  return result;
};
```

### 배운점

1. **비트연산을 익히자**
   이번 문제를 공부하며 비트연산을 다시 학습하고 정리했다.
   다양한 문제를 더 효율적으로 풀 수 있을 것 같다.
