/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

 //
 var canPlaceFlowers = function(flowerbed, n) {
    let pointer;
    
    // 예외 처리)
    if(n < 1) return true;
    if(flowerbed.length === 1){ // bed.length === 1 일 때는 flower 1 개만 가능
        if(flowerbed[0] === 0 && n === 1) return true;
        else if(flowerbed[0] != 0 || n > 1) return false;
    }

    // 최초 pointer 위치 정하기
    flowerbed.some((el, i) => {
        if(el === 0) {
            pointer = i;
            return true;
            // return true 에서 break 됨
        }
    })
    
    return new FlowerPlanter(flowerbed, n, pointer).go();
};

/* 공통된 function
    //- 다음 0 0 0 을 찾는 기능
    - 현재 flowers 가 0 이면 return true
    - 또는 pointer 가 bed.length 보다 크거나 같으면 return false
    - first 인지 middle 인지 end 인지 확인해서 적절한 함수 호출
*/

class FlowerPlanter {
    constructor(flowerBed, numOfFlowers, currentPointer){
        this.bed = flowerBed;
        this.flowers = numOfFlowers;
        this.pointer = currentPointer;

        // const plantController = function(obj){
            // console.log(this);
        function plantController(obj){
            if(obj.pointer === 0){
                if(!obj.first) obj.first = new First(obj);
                return obj.first;
            }
            else if(obj.pointer < obj.bed.length - 2){
                if(!obj.middle) obj.middle = new Middle(obj);
                return obj.middle;
            }
            else if(obj.pointer > 0 && obj.pointer < obj.bed.length){
                if(!obj.end) obj.end = new End(obj);
                return obj.end;
            }
        }

        this.go = function(){
            if(this.flowers <= 0) this.flag = true;
            else if(this.pointer >= this.bed.length) this.flag = false;

            else{
                plantController(this).plant();
            }
            return this.flag;
        }
    }
}


class First{
    constructor(planter){
        this.planter = planter;
        
        this.plant = function(){
            if(planter.bed[0] + planter.bed[1] === 0){
                planter.bed[0] = 1;
                planter.flowers --;
                planter.pointer ++;
            }
            planter.pointer ++;
            
            planter.go();
            return;
        }   
    }
}

class Middle{
    constructor(planterObj){
        const planter = planterObj;

        this.plant = function(){
            if(planter.bed[planter.pointer - 1] + planter.bed[planter.pointer] + planter.bed[planter.pointer + 1] === 0){
                planter.bed[planter.pointer] = 1;
                planter.flowers --;
                planter.pointer ++;
            }
            planter.pointer ++;
            
            planter.go();
            return;
        }
    }
    
}

class End{
    constructor(planter){
        this.planter = planter;
        
        this.plant = function(){
            if(planter.bed[planter.bed.length - 2] + planter.bed[planter.bed.length - 1] === 0){
                planter.bed[planter.bed[planter.bed.length - 1]] = 1;
                planter.flowers --;
                planter.pointer ++;
            }
            planter.pointer = planter.pointer + 2;
            
            planter.go();
            return;
        }
    }
}

// console.log(canPlaceFlowers([1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1], 5));
console.log(canPlaceFlowers([1,0,0,0,1,0,0],2));
// console.log(canPlaceFlowers([0], 2));