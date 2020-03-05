// O(nums2) 으로 구현

function merge(nums1, m, nums2, n) {
  let tmpIdx = m + n - 1;
  let idxOfNums1 = m - 1;
  let idxOfNums2 = n - 1;

  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
  } else {
    while (idxOfNums2 >= 0) {
      // O(N) 으로 각 배열의 현재 가장 뒷 요소들끼리 비교해 완성되는 배열의 가장 뒷자리 수부터 확정시켜 나감

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
