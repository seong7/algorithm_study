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
    
    const pivotIdx =  lastIdx;
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

        
        while(leftPointer < rightPointer){
            while(array[leftPointer] <= pivot){ // 값은 값일 때도 포인터 옮겨줘야함
                leftPointer++;
            }
            while(array[rightPointer] >= pivot){
                rightPointer--;
            }

            if(leftPointer < rightPointer) change(leftPointer, rightPointer);
        }

        change(leftPointer, pivotIdx);

        function change(idx1, idx2){
            let tempVal = array[idx1];
            array[idx1] = array[idx2];
            array[idx2] = tempVal;
        }

        return leftPointer;
    }
    
    return array;
}

console.log(quickSort([0, 5, 2, 1, 6, 3]));