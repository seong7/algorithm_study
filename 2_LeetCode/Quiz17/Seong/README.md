## 938. Range Sum of BST

: 주어진 binary search tree 를 탐색하여 L 이상 R 이하 값들의 합을 구하는 문제

- ### Solution

  1. #### 나의 코드 (DFS - iterate(while) - stack) [>>](iterate_stack.js)
  2. #### 나의 코드 (DFS - recursion) __ 가장 효율적 [>>](recursion.js)

```
Memo
- 비교 작업이 많으면 효율이 낮아지므로 조건문 optimize 필요함
- 클로저를 사용하면 효율이 낮아지므로 최대한 모든 변수를 하위 fn 의 매개변수로 넣어주기
```