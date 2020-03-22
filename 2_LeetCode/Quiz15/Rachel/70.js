function climbStairs(n) {
  let prev = 0;
  let cur = 1;
  let temp;

  for (let i = 0; i < n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
  }
  return cur;
}
console.log(climbStairs(5));