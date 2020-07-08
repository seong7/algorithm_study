/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const hashMap = {};
    let answer = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                addToHashMap(i, j);
                plus(i-1, j); plus(i, j-1); plus(i+1, j); plus(i, j+1);
            }
        }
    }
    
    function plus (x, y) {
        answer = hashMap[`${x},${y}`] ? answer - 1 : answer + 1;
    }
    
    function addToHashMap (x, y) {
        hashMap[`${x},${y}`] = true;
    }
    
    return answer;
};

