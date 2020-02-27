// 해시 맵으로 구현
// 1. completion array를 Map 으로 만든경우
function solution2(participant, completion) {
  let completionMap = new Map();

  completion.forEach((name) => {
    if (completionMap.has(name)) {
      completionMap.set(name, completionMap.get(name) + 1);
    } else {
      completionMap.set(name, 1);
    }
  });

  for (let i = 0; i < participant.length; i++) {
    if (completionMap.has(participant[i]) && completionMap.get(participant[i]) > 0) {
      const tmp = completionMap.get(participant[i]) - 1;
      completionMap.set(participant[i], tmp);
    } else {
      return participant[i];
    }
  }
}




// 해시 맵으로 구현
// 1. participant array를 Map 으로 만든경우
function solution3(participant, completion) {
  const participantMap = new Map();


  participant.forEach((name) => {
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) + 1);
    } else {
      participantMap.set(name, 1)
    }
  });

  for (let i = 0; i < completion.length; i++) {
    if (participantMap.has(completion[i])) {
      const tmp = participantMap.get(completion[i]) - 1;
      participantMap.set(completion[i], tmp);
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (participantMap.get(participant[i]) === 1) {
      return participant[i];
    }
  }
}


console.log(solution3(["mislav", "stanko", "mislav", "ana", 'stanko'], ['stanko', 'stanko', 'mislav', 'ana']));

