// value 와 Minimum 값을 가진 객체를 요소로 사용

var MinStack = function() {
    this.stack = [];
  };
  
  /** 
  * @param {number} x
  * @return {void}
  */
  MinStack.prototype.push = function(x) {
    this.stack.push(x);
  };
  
  /**
  * @return {void}
  */
  MinStack.prototype.pop = function() {
    this.stack.pop();
  };
  
  /**
  * @return {number}
  */
  MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
  };
  
  /**
  * @return {number}
  */
  MinStack.prototype.getMin = function() {
    let tempVal = this.stack[0];

    for(let i = 1; i < this.stack.length; i++){
        if(tempVal > this.stack[i]) tempVal = this.stack[i];
    }

    return tempVal;
  };
  
  /** 
  * Your MinStack object will be instantiated and called as such:
  * var obj = new MinStack()
  * obj.push(x)
  * obj.pop()
  * var param_3 = obj.top()
  * var param_4 = obj.getMin()
  */