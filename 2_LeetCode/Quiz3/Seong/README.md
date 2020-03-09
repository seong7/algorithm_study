## Valid Parentheses 문제

- ### Solution
  1. #### 나의 코드: O(N) [>>](solution.js)
  2. #### 참고 코드: O(N) [>>](ref.js)

```
- 나의 코드 : Regexp 사용해서 open / close 괄호 구분, switch 로 괄호 유효성 검증
- 참고 코드 1 : hash table 이용해 각 open 괄호에 대응하는 close 괄호 search 속도 최대화
- 참고 코드 2 : open 괄호들의 순서와 동일한 순서로 close 괄호들이 나열되어야함을 이용

- 공통 : 각 method 들의 return 값을 활용해 논리 연산 코드를 짜면 훨씬 간편하게 짤 수 있다.

```
