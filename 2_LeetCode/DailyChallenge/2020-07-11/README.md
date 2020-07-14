# LeetCode 3386

## Flatten a Multilevel Doubly Linked List

> [문제 출처](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)

### 문제

```
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.



Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:

(사진은 원본 참조)

After flattening the multilevel linked list it becomes:

(사진은 원본 참조)


Example 2:

Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation:

The input multilevel linked list is as follows:

  1---2---NULL
  |
  3---NULL
Example 3:

Input: head = []
Output: []


How multilevel linked list is represented in test case:

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
The serialization of each level is as follows:

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
Merging the serialization of each level and removing trailing nulls we obtain:

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]


Constraints:

Number of Nodes will not exceed 1000.
1 <= Node.val <= 10^5
```

### 나의 코드

기본적으로 재귀를 사용해 Linked List 를 traverse 하고 있다.  
재귀의 특징을 이용해 return 문으로 더 깊숙한 단계의 결과 값을 받아올 수 있고
이를 사용해 child node 의 level 의 traverse 및 parent node 와의 연결 처리를 했다.

```javascript
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  function flattener(node) {
    // null Exception 처리
    if (node === null) return;
    // node.child 가 있을 때
    else if (node.child) {
      // 1. node.next 를 저장해둔다.
      const holdingPointer = node.next;

      // 2. node 와 node.child 를 next / prev 관계로 수정한다.
      node.next = node.child;
      node.child.prev = node;

      // 3. node.child 로 flattener 함수를 재귀해 해당 level 의 tail 을 return 시켜 저장한다.
      const tailOfChild = flattener(node.child);

      // 4.  1 번에서 저장한 holdingPointer 가 null 이 아닐경우
      //     tail 과 holdingPointer 를 next / prev 관계로 연결한다.
      if (holdingPointer) {
        tailOfChild.next = holdingPointer;
        holdingPointer.prev = tailOfChild;
      }

      // 5. traverse 가 끝난 child 를 null 로 저장해 참조를 끊어준다.
      node.child = null;

      // 6. 4번에서 연결된 holdingPointer 부터 다시 traverse 시작한다.
      return flattener(holdingPointer);
    } else if (node.next) {
      return flattener(node.next);
    } else if (!node.next) {
      // next 가 없으면 tail 이므로 return 시킨다.
      return node;
    }
  }

  flattener(head);

  return head;
};
```

### 다른 사람의 코드

stack 을 이용해 정말 간단하게 푼 코드이다.

```javascript
var flatten = function (head) {
  if (!head) return null;

  // while 문으로 처리할 traverse 의 시작 node 가 될 dummyHead 선언
  let dummyHead = new Node(0, null, head, null);

  // traverse 중 next node 를 저장하고 꺼내어 current node 로 사용하기 위해 stack 선언
  // stack 의 FIFO 의 특성상 상위 level 의 traverse 를 그대로 중지시키고
  // 그 node 위에 child node 를 push 하고 pop 하며 하위 level 의 traverse 를 처리할 수 있다.
  // 하위 level 의 traverse 가 끝나면 자연스럽게 stack 의 다음 node 부터 시작하여 부모 level 을
  // 이어서 traverse 할 수 있다.
  let stack = [head];
  let current = dummyHead;
  let prev = null;

  while (stack.length != 0) {
    current = stack.pop();

    // 순서대로 traverse 하면 prev (이전) node 가 저장되어 있을 경우에만
    // 해당 node 와 prev / next 연결 할 수 있다.
    if (prev) {
      current.prev = prev;
      prev.next = current;
    }

    if (current.next != null) stack.push(current.next);
    if (current.child != null) {
      // has a child
      stack.push(current.child);
      current.child = null; // remove child reference
    }

    prev = current;
  }

  return dummyHead.next;
};
```

### 배운점

1. **재귀에서 return 의 결과 예상하기의 중요성**

   - 재귀 연산에서 상황별로 return 을 잘해줘야 복잡한 상황을 제어할 수 있는 알고리즘을 짤 수 있다.
   - 익숙해질 때까지 재귀를 적극적으로 사용해보자.

2. **자료구조 이해와 활용의 중요성**
   - 다른 사람의 코드를 보고 자료구조를 잘 활용하면 얼마나 효율적인 코드를 짤 수 있는지 배웠다.  
     stack 의 특성을 활용해 하위 레벨의 traverse 를 처리한 부분이 정말 인상적이었다.
   - stack 의 FIFO 특성을 활용해 다양한 문제에 사용해보자.
