// hash table 로 Search 속도 최대한 올리고
// stack 으로 순서 검사

var isValid = function(s) {
  const stack = [];
  const OPEN_BRACKETS = {
    "(": true,
    "[": true,
    "{": true
  };
  const CLOSE_BRACKETS = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0; i < s.length; i += 1) {
    if (OPEN_BRACKETS[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== CLOSE_BRACKETS[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Best of Best !
// switch 로 open 괄호를 대응하는 close 괄호로 바꾸어 Stack 에 넣어주고
// Close 괄호들 차례에서 Stack 의 값들과 동일한지 비교.
//   - stack.pop() 이 제거한 요소를 return 함을 이용
//   - open 괄호들의 순서와 동일한 순서로 close 괄호들이 나열되어야함을 이용

var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
