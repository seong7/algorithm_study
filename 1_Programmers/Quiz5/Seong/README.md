## String 문제

- ### Solution
    - #### Array 로 sort() 사용함 [[code 보기](solution.js)]

        - **[대문자 / 소문자 나눈 이유]**   
            Array.sort() 가 **O (n^2)** 라는 가정 하에..   (검증 못했음 / 연구 필요)
            - 배열 길이가 길어지면 작업량이 많아짐   
                ex) (100^2) > (50^2 + 50^2)
            - 대문자 소문자는 어짜피 각각 정렬되어야 하므로 따로 해도 상관 없음 

        - **Truty / Falsy value**   
            - Falsy values : undefined, null, 0, '', NaN   
            - Truthy values : NOT falsy values

            ```
            console.log( 4 || 5);        // 4  ( 4 : truthy value)
            console.log( 1 || -1);       // 1
            console.log( -1 || 1);       // -1  ( -1 : truthy value)
            console.log( 0 || -1);       // -1  ( 0 : falsy value)         
            ``` 

        - **코드  해석**   
            ```
            // sort() 의 매개변수 compare fn
            return +(a < b) || +(a === b) -1;   


                1. +(Boolean) 또는 (Boolean)+0 했을 때 :

                    true ->   1 으로 변환
                    false ->  0 으로 변환


                2. -1 의 의미 :  

                    sort() 의 매개변수인 compare fn 는 return 값 (-1, 0, 1) 에 따라 두 요소의 크기를 비교함
                    -  "z" < "a" _false  ->  "z" === "a"  _false
                        +(false) _0      ||   +(false)-1  _-1    ( -1 : truthy value )
                        -1 return  (앞 요소가 더 작았다고 인식함)

                    -  "z" < "z" _false  ->  "z" === "z"  _true
                        +(false)  _0      ||   +(true)-1   _0
                        0 return  ( 동일 값으로 인식 )
            ```
