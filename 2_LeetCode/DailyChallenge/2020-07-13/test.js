var reverseBits = function (n) {
  var result = 0;
  var count = 32;

  console.log(n.toString(2));
  console.log(new Number(1).toString(2));
  console.log(n & 1);

  while (count--) {
    result *= 2;
    result += n & 1;

    n = n >> 1;
  }

  return result;
};

// console.log(reverseBits(43261596) === 964176192);
console.log(reverseBits(9));
