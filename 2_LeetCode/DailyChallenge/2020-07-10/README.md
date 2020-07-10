# LeetCode 662

## Maximum Width of Binary Tree

> [문제 출처](https://leetcode.com/problems/maximum-width-of-binary-tree/)

### 문제

```
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:

Input:

           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
```

### 나의 코드

오늘도 Medium 난이도의 문제를 Time Limit Exceeded 로 해결하지 못했다.  
우선 나름대로 고민해서 짠 코드를 기록해두고 다른 사람의 코드를 보고 공부하기로 했다.

queue 를 활용한 BFS traverse 를 기본으로 접근했다.  
너비를 구하는 과정이 있어 시간 복잡도는 O(N) 보다는 크고 O(N^2) 보다는 적다.

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
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  // root 는 배열이 아닌 node 이다.

  if (root.left === null && root.right === null) return 1;
  // root.left 와 root.right 이 null 일 경우 너비는 1

  const queue1 = [root];
  const queue2 = [];
  let shiftingQueue = queue1;
  let pushingQueue = queue2;
  // queue 2 개를 선언해서 역할을 번갈아 바꿔주며 사용했다.
  // shiftingQueue : 저장된 node 들을 shift 하는 queue
  // pushingQueue : shiftingQueue 에서 꺼낸 node 의 자식 node 들을 저장해주는 곳이다.

  let currentNode;
  let maxWidth = 1;

  while (true) {
    currentNode = shiftingQueue.shift();

    if (currentNode === null) currentNode = new TreeNode(null);
    // getWidth 함수에서 현재 level 의 너비를 구하려면 null 도 모두 포함된 node 의 배열이 필요하다고 판단했다.
    // 그래서 currentNode 가 null 이어도 자식 node (null) 를 갖도록 TreeNode 인스턴스를 만들어 넣어주었다. (TreeNode 는 최 상단 jsDoc 에 정의됨)

    pushingQueue.push(currentNode.left);
    pushingQueue.push(currentNode.right);
    // 좌우 자식 노드를 저장

    if (shiftingQueue.length === 0) {
      const width = getWidth(pushingQueue);
      // 저장된 queue 로 현재 level 의 너비를 구함

      if (width === 0) break;
      // 만약 현재 level 의 배열이 null 로만 이루어져 있으면 0 으로 return 된다.
      // 즉 더 이상 하위 level 이 없으므로 while loop 을 중단

      maxWidth = Math.max(width, maxWidth);
      shiftingQueue = shiftingQueue === queue1 ? queue2 : queue1;
      pushingQueue = pushingQueue === queue1 ? queue2 : queue1;
      // Queue 의 역할 swap
    }
  }

  // 층별 너비 구하는 함수 (양 끝 포인터를 좁혀가며 end point 찾음)
  function getWidth(array) {
    let left = 0;
    let right = array.length - 1;

    while (array[left] === null || array[right] === null) {
      // 해당 자리의 요소가 null 이면 pointer 를 옮긴다.
      if (array[left] === null) left++;
      if (array[right] === null) right--;
      if (left > right) return 0;
      // 만약 left pointer 가 더 커졌다는 말은
      // null 로만 이뤄져 있다는 말이므로 return 0 (너비 0)
    }
    return right - left + 1; // 너비 구함 (inclusive)
  }
  return maxWidth;
};
```

### 다른 사람의 코드

```javascript
const widthOfBinaryTree = (root) => {
  const queue = [{ node: root, pos: 0 }];
  // queue 를 하나만 사용했다.
  // node 를 재구성해 position(pos) 값을 표시해준다.

  let maxWidth = 0;

  while (queue.length) {
    const levelLength = queue.length;
    // 해당 level 의 길이 (node 의 수) = 현재 queue 의 길이와 동일하다.

    let min = Number.MAX_VALUE;
    let max = 0;

    for (let i = 0; i < levelLength; i++) {
      // level 의 길이만큼 내부 loop

      const curr = queue.pop();
      min = Math.min(min, curr.pos);
      max = Math.max(max, curr.pos);
      // position 값을 저장해두니 간단하게
      // 왼쪽 pointer (min) 오른쪽 pointer (max) 정할 수 있다.

      // 자식 node queue 에 추가
      // (빼낼 때 pop() 을 하므로 unshift 로 추가하는데
      //  반대로 추가를 push() 빼낼 때 shift() 가 더 효율적이지 않을까 싶다.
      //  shift 연산은 push 연산에 비해 비효율적이고
      //  자식 두개를 추가, 하나를 빼주므로 추가가 더 빈번하다.)
      if (curr.node.left)
        queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });

      if (curr.node.right)
        queue.unshift({ node: curr.node.right, pos: curr.pos * 2 + 2 });
      // 가장 획기적인 부분은 자식 node 의 position 값을 (부모 pos * 2 + 1 / + 2) 을 해준부분이다.
      // 이렇게 해주면 내 풀이에서 고민했던 너비를 구하기 위해 null 을 배열에
      // 채워주는 과정이 불필요해진다.
      // position 값을 표시하고 position 값을 창의적으로 assign 하면서
      // 엄청난 효율성을 얻은 코드이다.
    }

    // level 의 길이가 1 일 땐 너비도 1이다.
    const levelWidth = levelLength === 1 ? 1 : max - min + 1;
    maxWidth = Math.max(maxWidth, levelWidth);
  }

  return maxWidth;
};
```

### 배운점

1. Queue 를 하나만 사용할 수 있다.

   - Queue 에서 새 node 를 꺼냄과 동시에 자식 node 를 추가해주므로 한 level 의 끝을 알 수 없는 문제가 있다고 생각했다.
   - 하지만, node 꺼내기 전 현재 queue 의 길이 값을 저장해두고 그 길이만큼만 loop 을 돌리면 새로 추가된 다음 level 의 자식 node 들은 꺼내지 않으므로 문제가 해결된다.

2. Position 값을 활용한 너비 구하기
   - 너비는 왼쪽 pointer 와 오른쪽 pointer 사이의 null 들 또한 포함해서 계산해야 한다. 나는 모든 node 들의 개수를 세어 너비를 구하자고 생각했다. null 들에 모두 임의로 null 이라는 값 (val) 을 가진 객체를 생성해 그 자식 node 들 도한 Queue 에 저장해주는 억지스러운 결정을 했다. (수를 맞춰주려고..)
   - position 값을 이용하면 훨씬 스마트하게 해결가능했다. node 의 property 에 pos 값을 저장해두었다.
   - **가장 창의적이었던 부분**은 자식 node 들의 pos 값을 정해주는 방식이었는데, 부모 node 의 pos 값에 2 를 곱해 left 자식은 + 1 , 오른쪽 자식은 + 2 를 해주었다.  
     **이렇게 하면 모든 node 가 고유의 자리 값을 가지게 된다. (full binary tree 가 층이 내려갈 수록 (\* 2) 의 node 수를 가진다는 점을 염두하면 이해가 수월하다.)**
