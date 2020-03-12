function solution(s, n) {
  let result = "";
  let array = s.split('');

  for(let i = 0; i < array.length; i++){
    let asciiNum = array[i].charCodeAt(0);
    if (asciiNum >= 65 && asciiNum <= 90){ //A~Z
      asciiNum = asciiNum + n;
      if(asciiNum > 90){
        asciiNum = asciiNum -26;
      }
    }
    else if (asciiNum >= 95 && asciiNum <= 122){ //a~z
      asciiNum = asciiNum + n;
      if(asciiNum > 122){
        asciiNum = asciiNum -26;
      }
    }
    result += String.fromCharCode(asciiNum);
  }
  return result;
}

console.log(solution('AB', 2));
