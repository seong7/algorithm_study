function getSum(a, b) {
  let result = 0;

  if ((a <= 0) && (b <= 0)) {
    let counts = a + b;

    while (counts < 0) {
      counts++;
      result--;
    }
  } else {
    if (a <= b) {
      for (let i = 0; i < b; i++) {
        result = ++a;
      }

    } else {
      for (let j = 0; j < a; j++) {
        result = ++b;
      }
    }
  }

  return result
};

console.log(getSum(-14, 0));