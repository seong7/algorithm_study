/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n === 0) return 0;
 
    const arry = [1, 2];
    for(let i = 2; i < n; i++){
        arry[i] = arry[i-2] + arry[i-1];
    }
    
    return arry[n-1];
};
console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));

/*

n = 0 => 0
n = 1 => 1
n = 2 => 2
n = 3 => 3
n = 4 => 5
n = 5 => 8
n = 6 => 13

   2 : 0 => 1
  1 1 1 1 1 1
  
   2 : 1  => 5
  2 1 1 1 1
  1 2 1 1 1
  1 1 2 1 1
  1 1 1 2 1
  1 1 1 1 2
  
   2 : 2   => 6 
  2 2 1 1
  2 1 2 1
  2 1 1 2
  1 2 2 1
  1 2 1 2
  1 1 2 2

   2 : 3 => 1

*/