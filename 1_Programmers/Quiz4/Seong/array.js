// for loop 사용

function solution(s) {
    
    const arr = s.split("");
    let currentIdx = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === " "){
            currentIdx = 0;
            continue;
        }
        if(currentIdx % 2 === 0){
            arr[i] = arr[i].toUpperCase();
        }else {
            arr[i] = arr[i].toLowerCase();
        }
        currentIdx++;
    }
    return arr.join("");
}


// .map() 사용 

function solution(s) {
    
    const arr = s.split("");
    let currentIdx = 0;
    
    const newArr = arr.map((el, i)=>{
        let newEl;
        
        if(el === " "){
            currentIdx = 0;
            newEl = " ";
            return newEl;
        }
        
        if(currentIdx % 2 === 0){
            newEl = el.toUpperCase();
        }else{
            newEl = el.toLowerCase();
        }
        currentIdx++;
        return newEl;
    })
    return newArr.join("");
}