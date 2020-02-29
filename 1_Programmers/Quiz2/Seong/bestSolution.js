// Set 으로 구현

const solution = (n) => {
    const set = new Set([2]);               // 2는 무조건 소수이므로 추가
    for (let i = 3; i <= n; i += 2){        // 짝수는 소수가 아니므로 제외
        set.add(i);    
    }
    
    for (let j = 3; j < Math.sqrt(n); j+=2){    // 제곱근까지의 홀수의 배수들 제외해주면 됨
        if(set.has(j)){                         // 아래 식에서 이미 j 가 제외 됐을 수 있음  (set 의 look up 이 빠른가?)
            for(let k = j*2; k <= n; k+=j){     // j*2 로 시작 : 3, 5, 7, 11 등 자체가 소수인 수들 보호
                set.delete(k);
            }
        }
    }
    return set.size;
}


// Map 으로 구현                  // Map 으로 구현한 코드는 시간초과에 걸림 (search 효율에서 차이가 나는건가?)

const solution = (n) => {
    const m = new Map();
    for(let i=3; i<=n; i+=2){
        m.set(i);               // key : i / value : undefined 로 set 됨
    }
    m.set(2);
    for(let j=3; j<Math.sqrt(n); j+=2){
        if(m.has(j)){
            for(let k=j*2; k<=n; k+=j){
                m.delete(k);
            }
        }
    }
    return m.size;
}
