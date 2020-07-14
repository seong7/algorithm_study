# LeetCode 100

## Same Tree

> [문제 출처](https://leetcode.com/problems/same-tree/solution/)

### 문제

```
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

### 나의 코드

각 tree 에 대한 queue 를 생성해 while loop 으로  
각 tree 를 순회하며 예외 상황들을 처리하는 방식으로 풀었다.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const queueP = [p];
  const queueQ = [q];

  while (queueP.length && queueQ.length) {
    const curP = queueP.shift();
    const curQ = queueQ.shift();

    if (curP === null && curQ === null) continue;
    else if (curP === null && curQ !== null) return false;
    else if (curP !== null && curQ === null) return false;
    else if (curP.val !== curQ.val) return false;
    else if (curP !== null && curQ !== null) {
      queueP.push(curP.left);
      queueQ.push(curQ.left);
      queueP.push(curP.right);
      queueQ.push(curQ.right);
    }
  }

  if (queueP.length !== queueQ.length) return false;
  return true;
};
```

### 참고 코드

재귀를 활용해 훨씬 더 깔끔한 방법으로 풀었다.

```javascript
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  // 두 재귀 호출을 && 연산하므로 한 쪽에서 true 가 나와도
  // 반대 쪽의 결과에 따라 최종 return 값이 결정되도록 설계되었음
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

### 배운점

1. **재귀 호출의 또 다른 접근법**
   7/11 Flatten a Multilevel Doubly Linked List 문제에서도 재귀 호출의 return 값에 따른
   다양한 설계 방법을 익히는 것의 중요성을 느꼈다.
   이번 참고 코드에서도 왼쪽과 오른쪽의 각각의 재귀호출 결과 값을 && 연산하는 방법으로 설계하여
   검증은 각자하고 최종 검증은 && 연산 하는 방법으로 작성되었다.
   이번 방법도 잘 익혀두어야겠다.
