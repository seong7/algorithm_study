class MyHashSet {

  arr = [];
  isVal = false;

  add(val) {
    this.arr.push(val);
  }

  remove(val) { // val은 다 사라져야 했다.!   더 짧아질수는 없을까..

    let tmpCount = 0;
    let tmpIdx = 0;

    this.arr.sort((a, b) => {
      return a - b
    });

    for (let i = 0; i < this.arr.length; i++) {
      if (val === this.arr[i]) {
        tmpIdx = i;
        break
      }
    }

    for (let j = 0; j < this.arr.length; j++) {
      if (val === this.arr[j]) {
        tmpCount++;
      }
    }

    this.arr.splice(tmpIdx, tmpCount);
  }

  contains(val) {
    if (!this.arr.length) {
      this.isVal = false;
    }

    for (let i = 0; i < this.arr.length; i++) {
      if (val === this.arr[i]) {
        return true
      }
    }
    return this.isVal;
  }

}

const HashSet = new MyHashSet();

HashSet.add(2);
HashSet.add(1);
console.log(HashSet.contains(1));
console.log(HashSet.contains(3));
HashSet.add(2);
console.log(HashSet.contains(2));
HashSet.remove(2);
console.log(HashSet.contains(2));
console.log(HashSet);