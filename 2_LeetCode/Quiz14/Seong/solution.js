/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// naive solution
var canPlaceFlowers = function(flowerbed, n) {
    // input : 1 - 20,000 size Array / num of Flower to plant
    // no-adjacent-flowers rule
    // 1 | 0 0 | 1 0 0  |  1 0 1 0  | 0 1 0 0 | 0 1 0 1 0 | 1 0 1 0 0 1
    // 양쪽 끝자리 : 00 이면 plantable : 끝자리 먼저 찾아야함
    // 중간 자리 : 000 이면 plantable
        
    let flowers = n;
    const bed = flowerbed;
    let pointer;

    // 예외) 
       //  1. n < 1 일 때 무조건 true
    if(n < 1) return true;
        // 2. length === 1 일 때
    if(bed.length === 1){
        if(bed[0] === 1 || n > 1) return false;
        else if(bed[0] === 0 && n <2) return true;
    }
    
    // 시작 pointer 정하기
    bed.some((el, i) => {
        if(el === 0) {
            pointer = i;
            return true;
            // return true 에서 break 됨
        }
    })
    
    // pointer 가 처음에 있을 때
    if(pointer === 0 && bed[1] === 0){
        bed[0] = 1;
        pointer = pointer + 2;
        flowers--;
    }
    
    // pointer 가 중간에 있을 때
    while(pointer < bed.length - 2){
        if(bed[pointer - 1] + bed[pointer] + bed[pointer + 1] === 0){
            // console.log(pointer-1, pointer, pointer+1);
            bed[pointer] = 1;
            flowers --;
            pointer ++;
            // console.log(flowers);
        }
        pointer++;
    }
    
    // 끝자리 체크
    if(bed[bed.length - 2] + bed[bed.length -1] === 0){
        bed[bed.length -1] = 1;
        flowers--;
    }
    
    return flowers < 1;
};

