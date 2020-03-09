function solution1(nums) {

    const numsSizeSet = new Set()

    for (let i = 1; i <= nums.length; i++) {
        numsSizeSet.add(i);
    }

    for(let j = 0; j < nums.length; j++) {
        if(numsSizeSet.has(nums[j])) {
            numsSizeSet.delete(nums[j]);
        }
    }
    return [...numsSizeSet];
}

console.log(solution1([4, 3, 2, 5, 8, 2, 3, 1]));