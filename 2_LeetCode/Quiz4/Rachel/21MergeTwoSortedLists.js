// let Input = '1->2->4','1->3->4';

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null && l2 !== null) { // null은 연결된 다음 노드가 없음을 의미
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next; // l1(현재1).next인 2를 l1로 할
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  dummy.next = l1 === null ? l2 : l1;

  return head.next;
};