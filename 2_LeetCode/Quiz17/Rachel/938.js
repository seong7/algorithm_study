function rangeSumBST(rootNode, left, right) {

  let sum = 0;

  if (rootNode == null) {
    return sum;
  }
  if (rootNode.val > left) {
    sum += rangeSumBST(rootNode.left, left, right);
  }
  if (rootNode.val <= right && rootNode.val >= left) {
    sum += rootNode.val;
  }
  if (rootNode.val < right) {
    sum += rangeSumBST(rootNode.right, left, right);
  }

  return sum;
};