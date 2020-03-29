function recur(root) {
  const result = [];

  function recur(tree) {
    if (!tree) {
      return result;
    } else {
      result.push(tree.val);
      for (let i = 0; i < tree.children.length; i++) {
        recur(tree.children[i]);
      }
    }

    return result;
  }

  return recur(root)
};