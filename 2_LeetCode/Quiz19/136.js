function findSingleNumber(numberArray) {
  let result = 0;

  for (let i = 0; i < numberArray.length; ++i) {
    result ^= numberArray[i];
  }

  return result;
}

console.log(findSingleNumber([0,0,1,5,5,1,10000,333,444,333,444]));