function solution(array, commands) {
  var answer = [];

  commands.forEach((c) => {
    const quick = new QuickSorter(array.slice(c[0] - 1, c[1]));
    quick.quickSort();
    answer.push(quick.array[c[2] - 1]);
  });

  return answer;
}

/* 퀵정렬 class */
class QuickSorter {
  constructor(array) {
    // 배열 저장
    this.array = array;
  }

  /* 정렬 함수 */
  quickSort(start = 0, end = this.array.length - 1, array = this.array) {
    const pivot = Math.trunc((start + end) / 2);
    const pivotVal = array[pivot];
    // pivotVal 은 partition() 에서 단순히 arry[start] 와 arry[end] 를 공통적으로 비교 값일 뿐
    // 배열을 나누는 기준은 아님

    const part = this.partition(start, end, pivotVal); // part 는 현재 부분 배열의 정렬 기준 index 임

    if (start < part - 1) {
      // part 의 왼쪽 배열은 (part - 1) 가 start 보다 클 때 정렬 호출
      this.quickSort(start, part - 1);
    }
    if (part < end) {
      // part 의 오른쪽은 part 가 end 보다 작을 때 정렬 호출
      this.quickSort(part, end);
    }
  }

  /* 좌 < pivotVal < 우 로 분리해주는 함수 */
  partition(start, end, pivotVal, array = this.array) {
    while (start <= end) {
      if (array[start] < pivotVal) {
        // start 이동해야할 때
        start++;
        continue;
      }
      if (pivotVal < array[end]) {
        // end 이동해야할 때
        end--;
        continue;
      }
      this.swap(start, end); // start 와 end 모두 멈춘 상태일 때
      start++;
      end--;
    }
    return start; // 마지막 start 의 앞자리에서 start 와 end 가 만났음
    // 즉, start - 1 기준으로 현재 부분배열이 [좌 < start - 1 < 우] 로 정렬됨
  }

  /* 값 교환 함수 */
  swap(start, end, array = this.array) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
  }
}

// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// );

/* 퀵정렬 클래스 테스트 */
// const quick = new QuickSorter([3, 4, 1]);
// quick.quickSort();
// console.log(quick.array);
