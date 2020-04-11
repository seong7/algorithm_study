// hashtable 사용 (객체 내에 새로운 property 부여)
// time : O(n)
var hasCycle = function (head) {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.visited) return true;
    currentNode.visited = true;
    currentNode = currentNode.next;
  }

  return false;
};
