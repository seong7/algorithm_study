/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Brute Force
  // Hash map
  // loop 두번 돌려야함
  const map = new Map();

  nums.forEach(c => {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 0);
  });

  let majourity = nums[0];
  map.forEach((v, k) => {
    majourity = map.get(majourity) < v ? k : majourity;
  });

  return majourity;
};

var majorityElement = function(nums) {
  // for 문 한번으로 종료

  const map = new Map();
  const bias = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
    if (map.get(c) > bias) {
      return c;
    }
  }
};
