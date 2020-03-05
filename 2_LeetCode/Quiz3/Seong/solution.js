var isValid = function(s) {
  const stack = [];

  const close = p => {
    let lastEl = stack[stack.length - 1];
    let flag = false;

    switch (p) {
      case ")":
        flag = lastEl === "(";
        break;
      case "]":
        flag = lastEl === "[";
        break;
      case "}":
        flag = lastEl === "{";
        break;
    }
    return flag && stack.pop(); // flag 가 true 일때만 stack.pop() 실행됨
    // stack.pop() 이 return 값을 가지므로 논리연산문에 사용 가능.
  };

  for (let i in s) {
    if (s[i].match(/^\($|^\[$|^\{$/)) {
      stack.push(s[i]);
    } else if (s[i].match(/^\)$|^]$|^}$/)) {
      if (!stack.length || !close(s[i])) return false;
      // 길이가 없거나,    pop 이 실패하면    return false
    } else {
      continue;
    }
  }

  return stack.length === 0;
};
