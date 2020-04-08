## 283. Move Zeroes

: 배열 내에 0 을 모두 오른쪽으로 이동시키기
  - in-place 로 풀기

- ### Solution

  1. #### 나의 코드  [>>](solution).js)

```
Memo

나의 코드 풀이 :
1. 0 제외한 모든 수를 배열 끝에 push
2. 0 의 수 count
3. 배열 끝에 0 의 개수만큼 0 push
4. 최초 배열의 길이만큼 splice 로 삭제한 후 return 배열
```
