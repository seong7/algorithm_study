class Quick {
  constructor() {
    this.numbers = [4, 2, 5, 6, 1, 10, 32, 1, 3];
  }

  quickSort(_start = 0, _end = this.numbers.length - 1, arry = this.numbers) {
    let start = _start;
    let end = _end;
    const pivot = Math.trunc((start + end) / 2);

    const pivotVal = arry[pivot];
    // pivot 의 역할은 start 와 end 의 "공통된 비교 기준 값"
    // 즉, pivot 의 index 가 아니라 value 가 중요함
    // pivot 의 index 만 받아서 arry[pivot] 형태로 사용하면 partition 에서 pivot index 가 변할 수 있으므로 문제됨

    while (start <= end) {
      if (arry[start] < pivotVal) {
        // = 은 제외
        start++;
        continue;
      }
      if (arry[end] > pivotVal) {
        // = 은 제외
        end--;
        continue;
      }

      let temp = arry[start];
      arry[start] = arry[end];
      arry[end] = temp;
      start++;
      end--;
    }

    if (_start < start - 1) {
      console.log("왼쪽", _start, start, end);
      this.quickSort(_start, start - 1, arry);
      // 현재 start 가 최초의 _start 보다 2 자리 이상 크지 않으면 다음 호출 시 start === end 이므로
      // 한번더 정렬할 의미가 없음
    }

    if (start < _end) {
      console.log("오른쪽", start, end, _end);
      this.quickSort(start, _end, arry);
      // 현재 start 가 최초의 _end 보다 작으면 다음 호출 시 start 와 end 가 최소 1자리 이상 차이나므로 호출한다.
    }
  }

  printNumbers() {
    console.log(this.numbers);
  }
}

// (function () {
//   const numbers = [4, 2, 5, 3, 1];
//   quickSort(0, 4, numbers);
//   console.log(numbers);
// })();

const q = new Quick();
q.quickSort();
q.printNumbers();
