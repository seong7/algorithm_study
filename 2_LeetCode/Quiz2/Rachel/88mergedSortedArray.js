// .sert() API사용
function solution1(nums1, m, nums2, n) {
  for(let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  return nums1.sort((a, b) => {
    return a - b;
  })
}

// idxPoint사용
function solution2(nums1, m, nums2, n) {
  let tmpIdx = m + n - 1;
  let idxOfNums1 = m - 1;
  let idxOfNums2 = n - 1;

  if(m === 0) {
    for(let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
  } else {
    while (idxOfNums2 >= 0) {
      if (nums1[idxOfNums1] > nums2[idxOfNums2]) {
        nums1[tmpIdx] = nums1[idxOfNums1];
        idxOfNums1--;
      } else {
        nums1[tmpIdx] = nums2[idxOfNums2];
        idxOfNums2--;
      }
      tmpIdx--;
    }
  }
  return nums1;
}


console.log(solution2([0], 0, [1], 1));