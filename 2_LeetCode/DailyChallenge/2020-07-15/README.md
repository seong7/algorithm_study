# LeetCode 1344

## Angle Between Hands of a Clock

> [문제 출처](https://leetcode.com/problems/angle-between-hands-of-a-clock/)

### 문제

```
Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.



Example 1:



Input: hour = 12, minutes = 30
Output: 165
Example 2:



Input: hour = 3, minutes = 30
Output: 75
Example 3:



Input: hour = 3, minutes = 15
Output: 7.5
Example 4:

Input: hour = 4, minutes = 50
Output: 155
Example 5:

Input: hour = 12, minutes = 0
Output: 0


Constraints:

1 <= hour <= 12
0 <= minutes <= 59
Answers within 10^-5 of the actual value will be accepted as correct.
```

### 나의 코드

각 tree 에 대한 queue 를 생성해 while loop 으로  
각 tree 를 순회하며 예외 상황들을 처리하는 방식으로 풀었다.

```javascript
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  // 시침의 위치를 min 단위로 계산
  const hourToMin = (5 * hour + (5 * minutes) / 60) % 60;

  // 큰수 , 작은 수 구분
  const bigger = Math.max(hourToMin, minutes);
  const smaller = Math.min(hourToMin, minutes);

  // 각도 계산
  // 두 수의 차 , 0 과 두수의 각각의 차 합 중 작은 수
  const angle1 = (bigger - smaller) * 6;
  const angle2 = (60 - bigger + (smaller - 0)) * 6;

  return Math.min(angle1, angle2);
};
```

### 참고 코드

```javascript
```

### 배운점
