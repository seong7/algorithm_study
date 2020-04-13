// 1 <= N <= 100

if (false) {
  // 1
  for (let i = 0; i < 1; i++) {
    console.log("*");
  }

  // console.log("\n");

  // 2
  for (let i = 0; i < 2; i++) {
    console.log("*\n *");
  }

  // console.log("\n");

  // 3
  for (let i = 0; i < 3; i++) {
    console.log("* *\n *");
  }

  // console.log("\n");

  // 4
  for (let i = 0; i < 4; i++) {
    console.log("* *\n * *");
  }

  // console.log("\n");

  // 5
  for (let i = 0; i < 5; i++) {
    console.log("* * *\n * *");
  }

  // console.log("\n");

  // 6
  for (let i = 0; i < 6; i++) {
    console.log("* * *\n * * *");
  }
}

/*

    1 "*"
    2 "*\n *"
    3 "* *\n *"
    4 "* *\n * *"
    5 "* * *\n * *"
    6 "* * *\n * * *"
    7 "* * * *\n * * *"

    */

function printOnConsole(n) {
  let num = 0;
  while (num < n) {
    console.log(makeSetOfStars(n));
    num++;
  }

  function makeSetOfStars(n) {
    let setOfStars = "";
    const halfN = Math.ceil(n / 2);

    setOfStars += get_n_NumberOfStars(halfN);

    if (n - halfN) {
      setOfStars += "\n" + get_n_NumberOfStars(n - halfN);
    }

    function get_n_NumberOfStars(n) {
      let stars = "";
      let num = 0;
      while (num < n) {
        stars += " *";
        num++;
      }
      return stars;
    }

    return setOfStars.substring(1);
  }
}

printOnConsole(10);
