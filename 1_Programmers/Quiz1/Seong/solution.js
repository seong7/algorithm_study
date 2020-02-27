/* 
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.
*/

// Suceeded code

function solution(participant, completion) {
    let answer = "";
    const parMap = new Map();
  
    participant.forEach(el => {                 // O(n)
      if (!parMap.has(el)) {                    // O(1)
        parMap.set(el, 1);
      } else {
        parMap.set(el, parMap.get(el) + 1);
      }
    });
  
    completion.forEach(el => {                  // O(n)
      if (parMap.get(el) > 1) {                 // O(1)
        parMap.set(el, parMap.get(el) - 1);
      } else {
        parMap.delete(el);
      }
    });
  
    for (const [key] of parMap) {               // O(n)
      answer = key;
    }
  
    // const parKeys =  parMap.keys();  // O(n)
    // answer = parKeys.next().value;   // O(1) + O(1)
    
  
    return answer;
  }                                             // ** O(n)
  
  
  
  // Failed code (efficiency)
  
  function solution(participant, completion) {
    let answer = "";
    const partMap = new Map();
  
    for (let i = 0; i < participant.length; i++) {        // O(n)
      partMap.set(i, participant[i]);                     // O(1)
    }
  
    for (let [key, value] of partMap.entries()) {
      if (completion.includes(value)) {
        partMap.delete(key);
        completion.splice(completion.indexOf(value), 1);   // O(n^2)
                                  // indexOf 에서 O(n)
      }
    }
  
    for (let [key, value] of partMap.entries()) {         // O(n)
      answer = value;
    }
  
    return answer;
  }                                                        // ** O(n^2)   : 실패
  