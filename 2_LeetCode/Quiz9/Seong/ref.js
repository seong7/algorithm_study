// 1
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  
  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  
  return root;
};




// 2
var sortedArrayToBST = function(nums) {
  if (!nums) {
      return null;
  }
  return helper(nums, 0, nums.length - 1);
}

var helper = function(nums, low, high) {
  if (low > high) { // Done
      return null;
  }
  var mid = (low + (high - low) / 2)>>0;
  var node = new TreeNode(nums[mid]);
  node.left = helper(nums, low, mid - 1);
  node.right = helper(nums, mid + 1, high);
  return node;
}


// 3
var sortedArrayToBST = function(nums, start=0, end = nums.length-1) {
  if(start<=end){
      let mid = Math.floor((start+end)/2);
      // console.log(mid, end)
      let root = new TreeNode(nums[mid]);
      root.left = sortedArrayToBST(nums, start, mid-1);
      root.right = sortedArrayToBST(nums, mid+1, end);
      return root;
  }
  return null;
};