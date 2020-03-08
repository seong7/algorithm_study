// stack = [[2,2], [4,2], [3, 2]]

function last(stackArr) { // stack에서 가장 마지막 index값 리턴 [3, 2]
    return stackArr[stackArr.length - 1];
}

class Minstack {
    stack = [];


    push(x) { // stack이 비어있을 경우
        if (stackArr.length === 0) {
            stackArr.push([x, x]);
            return;
        }

        const currentMin = last(this.stack)[1]; // [3, 2] -> 2
        this.stack.push([x, Math.min(x, currentMin)]); 
        // 새 값이 들어올경우 currenMin과 비교해 stack에 새 배열 push
        // if x = 4 -> stack = [[2,2], [4,2], [3, 2], [4, 2]]
    }

    pop() { // stack의 마지막 index제거 stack = [[2,2], [4,2], [3, 2]]
        this.stack.pop();
    }

    top() {// stack의 마지막 index[0] 제거
        return last(this.stack)[0];
    }

    getMin() {
        return last(this.stack)[1];
    }
}