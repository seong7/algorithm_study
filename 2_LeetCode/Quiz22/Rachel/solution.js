function solution(head) {
  const set = new Set();
  let node = head;
  // return true when node has been visited and saved in the set
  while (node !== null) {
    if (set.has(node)) {
      return true;
    }
    set.add(node);
    node = node.next
  }
  return false;
};