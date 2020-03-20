## 605. Can Place Flowers 문제

: 0, 1 로 이루어진 배열에 0 을 빈자리로 보고 꽃들을 심는 문제   
    - 꽃들은 서로 인접할 수 없음   
    - 주어진 n 만큼 심을 수 있으면 return true , 없으면 return false  

- ### Solution

  1. #### 나의 코드 [>>](solution.js)
  1. #### 나의 코드 (oop) [>>](oop.js)
  1. #### 나의 코드 (oop2) [>>](oop2.js)

```
Memo
oop 형식으로 짠 코드는 효율성이 그리 좋지 않았음

-> 하지만, prototype 과 constructor 내 function 의 차이점과
  객체 내에서 this. 으로 선언한 변수와 const, let, var 으로 선언한
  일반 변수의 차이점을 알 수 있어 좋았음.


  prototype function : 
      - this. 으로 선언된 변수에만 접근 가능
        (객체 내에 있는 것이 아니므로)
      - 해당 fn 호출하려면 this. 으로 호출해야함 (객체의 속성이므로)

  constructor 내 function : 
      1. this. 으로 선언된 fn : 
          - 객체의 속성으로 저장됨 (객체 호출 시 접근 가능)
          - fn 내에서 일반변수에 접근 가능 (prototype 과 차이점)

      2. function 또는 const, let, var 선언된 fn : 
          - 객체 내에서만 접근 가능한 fn
          - fn 내에서 일반변수 접근 가능
          - 해당 fn 내에서 객체의 속성(this.)에 접근 불가 
            (매개변수로 넣어주면 사용 가능)
            (또는 일반 변수를 선언하여 this. 변수 값을 대입해 사용 가능)

  
  this. 으로 선언한 변수 :
      - 객체의 속성으로 저장됨 (객체 호출 시 접근 가능)
  
  const, let, var 으로 선언한 일반 변수 :
      - 객체 내에서만 접근 가능한 변수
      - 호출 시 this. 붙이지 않음
      - this. 변수의 값을 대입할 수 있음

```