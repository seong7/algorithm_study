// O(nums1 * nums2) 로 구현..

var merge = function(nums1, m, nums2, n) {
  if (m === 0) {
    // nums1 = [...nums2];
    // paramater 를 재선언해도 의미가 없음.. (아래에선 계속 최초의 parameter 를 호출하기 때문)

    nums1.forEach((_, idx) => {
      nums1[idx] = nums2[idx];
    });
  } else {
    // nums2 는 정방향 (작은 수부터) / nums1 은 역방향 (큰 수부터) 비교 + 이동을 반복하는 방식

    let lastIdx = m - 1;
    for (let i = 0; i < n; i++) {
      for (let j = lastIdx; j >= 0; j--) {
        if (nums1[j] <= nums2[i]) {
          nums1[j + 1] = nums2[i];
          break;
        } else {
          nums1[j + 1] = nums1[j];
          nums1[j] = nums2[i];
        }
      }
      lastIdx++;
    }
  }
};
