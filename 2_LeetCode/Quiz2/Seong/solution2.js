/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  m--; n--;
  let insertPosition = m + n + 1
  while(n >= 0){
  // for (let i = insertPosition; i >= 0; i--) {              // 원래 insertPostion 만큼 다 돌려야하는줄 알았음
      // const a = m < 0 ? -Infinity : nums1[m];              // 그래서 먼저 소진된 배열의 index 가 -1 이되어 undefined 를 방지하려함
      // const b = n < 0 ? -Infinity : nums2[n];
                                                              // 하지만 nums2 가 소진될때까지만 돌리면 되는 것을 깨달음 !
                                                              // loop 이 돌고 있는 상세한 로직을 깊게 생각해보면 더 효율적인 코드 짤 수 있다 !
      nums1[insertPosition--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
  }
};