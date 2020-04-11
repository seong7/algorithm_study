// slow, fast pointer 방식
// time: O(n) / space : O(1) __ 두개의 노드만 사용함
const hasCycle = (head) => {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    // p1 은 하나씩 넘어감
    // p2 는 두개씩 넘어감

    if (p1 === p2) {
      // cycle 이면 결국 p2 가 p1 을 따라 잡음
      return true;
    }
  }

  return false;
};
