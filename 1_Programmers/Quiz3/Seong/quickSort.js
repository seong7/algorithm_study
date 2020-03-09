function solution(arr, divisor) {
    let answer = [];
     
     // arr.forEach((el) => {
     //     if(el % divisor === 0) answer.push(el);
     // })
     
     answer = arr.filter((c, i, arr) => c % divisor === 0)
     
     
     return answer.length ? quickSort(answer) : [-1];
 }




// Quick 정렬 함수 (array, leftIdx = 0, rightIdx = array.length-1)  // 최초에만 적용될 매개변수 default 값 지정
        // Base Case 지정
        // Pivot Idx 지정
        // 분할된 array = partition (array, leftIdx, rightIdx)
    
        /* 좌우 하위함수 quick 정렬 */
        // Quick 정렬 함수 recursion (array, leftIdx, p);
        // Quick 정렬 함수 recursion (array, p, rightIdx);
    
        // partition (분할) 함수 (leftIdx, rightIdx)
            // return 분할된 array
     
const quickSort = (array, startIdx = 0, lastIdx = array.length-1) => {  //최초에만 적용될 매개변수 default 값 지정
    // console.log(`${array.length}, startIdx : ${startIdx},  lastIdx : ${lastIdx}`);
    if(lastIdx - startIdx <= 0) return;
    
    const pivotIdx =  lastIdx; // 가장 오른 쪽을 pivot 으로 지정
    const partitionIdx = partition(array, startIdx, lastIdx-1, pivotIdx);
    // console.log(`newPivotIdx : ${newPivotIdx}`);
    
    // 하위함수 sort (좌 우) 
    quickSort(array, startIdx, partitionIdx - 1);
    // console.log("=======================");
    quickSort(array, partitionIdx + 1, lastIdx);
    
    // 분할 함수
    function partition (array, startIdx, lastIdx, pivotIdx) {
        // console.log(`${array.length}, startIdx : ${startIdx},  lastIdx : ${lastIdx}, pivotIdx : ${pivotIdx}`);
        let leftPointer = startIdx;
        let rightPointer = lastIdx;
        const pivot = array[pivotIdx];

        
        while(leftPointer <= rightPointer){
            while(array[leftPointer] < pivot){
                leftPointer++;
            }

            while(array[rightPointer] > pivot){
                rightPointer--;
            }
            if(leftPointer <= rightPointer){
                // change(leftPointer, rightPointer);
                let swap = array[leftPointer];
                array[leftPointer] = array[rightPointer];
                array[rightPointer] = swap;
                leftPointer++;
                rightPointer--;
            }
        }


        return leftPointer;  // 교환은 leftPointer 와 pivotIdx 가 다를 때만 일어남
    }
    
    return array;
}
                    // 0, |1|, |(2)|

                    // 0, 1, 2, ||3||, 6, 5
                    // 0, 1, 2, ||5||, 6, (3)
                    // 0, 1, 2, ||5||, 6, (3)
                    // 0, |1|, 2, |5|, 6, (3)
// console.log(quickSort([0, 5, 2, 20, 1, 6, 3, 50]));
// console.log(quickSort([1, 5, 10000, 888, 55, 20, 564081]));






//// Patition 함수 Test 용
// 분할 함수
function partition (array, startIdx, lastIdx, pivotIdx) {
    console.log(`${array.length}, startIdx : ${startIdx},  lastIdx : ${lastIdx}, pivotIdx : ${pivotIdx}`);
    let leftPointer = startIdx;
    let rightPointer = lastIdx;
    const pivot = array[pivotIdx];

    
    // while(leftPointer <= pivotIdx){
    while(leftPointer <= rightPointer){
        while(array[leftPointer] < pivot){
            leftPointer++;
        }

        // if(leftPointer < rightPointer){ // 왼쪽 포인터가 오른쪽 포인터에 도달하면 동작 안함
        //     while(array[rightPointer] >= pivot && leftPointer < rightPointer){
        //         rightPointer--;
        //     }
        //     change(leftPointer, rightPointer);
        // }else{
        //     break;
        // }

        while(array[rightPointer] > pivot){
            rightPointer--;
        }
        if(leftPointer <= rightPointer){
            // change(leftPointer, rightPointer);
            let swap = array[leftPointer];
            array[leftPointer] = array[rightPointer];
            array[rightPointer] = swap;
            leftPointer++;
            rightPointer--;
        }
    }

    // function change(idx1, idx2){
    //     let swap = array[idx1];
    //     array[idx1] = array[idx2];
    //     array[idx2] = swap;
        console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6]);
    //     return idx1;
    // }
    
    // return leftPointer === pivotIdx ? leftPointer : change(leftPointer, pivotIdx);  // 교환은 leftPointer 와 pivotIdx 가 다를 때만 일어남
    return leftPointer;
}
// console.log(partition([0, 1, 2, 3, 6, 5], 0, 1, 2));
                    //  
                    // 0, 1, 2, *20*, 5, 6, (3) 
console.log(partition([0, 5, 2, 20, 1, 6, 3], 0, 5, 6));
                    