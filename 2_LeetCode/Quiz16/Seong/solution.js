/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    
// naive code
    // let answer;
     // A.forEach((c, i, arr) => {
     //    if(c > arr[i+1]) {
     //        answer = i;
     //    }
     // })
    // return answer;
    
// 2
    // for(let i = 0; i < A.length; i++){
    //     if(A[i] > A[i+1]) return i
    // }
    
// 3 (binary search - recursion) __ 가장 효율적임 
    
        // function compare(a, b){  (필요 없음)
        //     return a < b
        // }

        const recursion = (start = 0, end = A.length - 1) => {
            const mid = Math.trunc((start + end) / 2);
            // const left = mid-1;
            // const right = mid+1;
            
            console.log(`start : ${start} , end : ${end}, mid : ${mid}`);
        
            // base case
            if(A[mid-1] < A[mid] && A[mid] > A[mid+1]) return mid;
        
            // case 1
            if(A[mid-1] > A[mid]) return recursion(start, mid-1); 
        
            // case 2
            if(A[mid-1] < A[mid]) return recursion(mid+1, end);
        }
        return recursion();

};

// console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19,18,16]))

