function invertTree(root) {

  if(root !== null) {
    const tmpNode = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmpNode);
  }

  return root;
}