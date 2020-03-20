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
    constructor(flowerBed, flowers, pointer){
        this.bed = flowerBed;
        this.flowers = flowers;
        this.pointer = pointer;
        // this.first = new First(this);
        // this.middle = new Middle(this);
        // this.end = new End(this);
    }


    plantController(){
        if(this.pointer === 0){
            if(!this.first) this.first = new First(this);
            return this.first;
        }
        else if(this.pointer < this.bed.length - 2){
            if(!this.middle) this.middle = new Middle(this);
            return this.middle;
        }
        else if(this.pointer > 0 && this.pointer < this.bed.length){
            if(!this.end) this.end = new End(this);
            return this.end;
        }
    }
    
    go(){
        if(this.flowers <= 0) this.flag = true;
        else if(this.pointer >= this.bed.length) this.flag = false;

        else{
            this.plantController().plant();
        }

        return this.flag;
    }
}


class First{
    constructor(planter){
        this.planter = planter;
    }
    
    plant(){
        if(this.planter.bed[0] + this.planter.bed[1] === 0){
            this.planter.bed[0] = 1;
            this.planter.flowers --;
            this.planter.pointer ++;
        }
        this.planter.pointer ++;
        
        this.planter.go();
        return;
    }   
}

class Middle{
    constructor(planter){
        this.planter = planter;

        // this.a = planter.bed[planter.pointer - 1];
        // this.b = planter.bed[planter.pointer];
        // this.c = planter.bed[planter.pointer + 1];
    }

    plant(){
        if(this.planter.bed[this.planter.pointer - 1] + this.planter.bed[this.planter.pointer] + this.planter.bed[this.planter.pointer + 1] === 0){
            this.planter.bed[this.planter.pointer] = 1;
            this.planter.flowers --;
            this.planter.pointer ++;
        }
        this.planter.pointer ++;

        this.planter.go();
        return;
    }
}

class End{
    constructor(planter){
        this.planter = planter;

        // this.bedLength = planter.bed.length;
        // this.a = planter.bed[this.bedLength - 2];
        // this.b = planter.bed[this.bedLength - 1];
    }

    plant(){
        if(this.planter.bed[this.planter.bed.length - 2] + this.planter.bed[this.planter.bed.length - 1] === 0){
            this.planter.bed[this.planter.bed[this.planter.bed.length - 1]] = 1;
            this.planter.flowers --;
            this.planter.pointer ++;
        }
        this.planter.pointer = this.planter.pointer + 2;

        this.planter.go();
        return;
    }
}

console.log(canPlaceFlowers([1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1], 5));
// console.log(canPlaceFlowers([1,0,0,0,1,0,0],2));
// console.log(canPlaceFlowers([0], 2));