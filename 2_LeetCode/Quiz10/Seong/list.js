/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.contains(key)){
        this.set.push(key)
    };
};
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.set.forEach((el, i)=>{
        if(el === key) this.set.splice(i, 1);
    })
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let flag = false;
    this.set.forEach((el)=>{
        if(el === key) flag = true;
    })

    return flag;
};

