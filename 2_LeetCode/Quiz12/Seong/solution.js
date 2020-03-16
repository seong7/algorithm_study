/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {
    // a, b 양수 음수 다 됨 (integer)
    
    // 부호 같을 경우
    if((a >= 0 && b >= 0) || (a < 0 && b < 0)){
        const sign = a >= 0 ? 1 : -1;
        const arry1  = new Array(Math.abs(a));
        const arry2 = new Array(Math.abs(b));
        return sign * ([...arry1, ...arry2].length);
    }   
    // 부호 다를 경우
        // 1) 절대값 같을 경우
    else if((Math.abs(a) === Math.abs(b))){
        return 0;
    }
        // 2) 절대값 다를 경우
    else{
        let pos, neg;
        if(a > 0){
            pos = a;
            neg = b;
        }else{
            pos = b;
            neg = a;
        }
        return eval(`${pos}${neg}`);
    }
    
        /*  
            배열 a , b
            1) |a| = |b| => 0
            2) |a| != |b| => 둘 중 절대값이 더 큰 값의 부호 따라감
                          => 큰값 배열에서 작은값 배열의 크기만큼 pop()
        */
    
};
// console.log(getSum(0, 17));
// console.log(getSum(-1, -2));
// console.log(getSum(-4, 4));
// console.log(getSum(-3, 4));