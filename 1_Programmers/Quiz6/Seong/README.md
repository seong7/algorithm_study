## String 문제

- ### Solution
    1. #### Regexp 사용 [>>](regexp.js)
    2. #### isNaN(string) 으로 검증 [>>](isnan.js)

    - **참고** :    
    ```
    isNaN("1e22")  == false   (1e22 는 지수 표현이라 Number 로 인식됨)   
    단 한 문자씩 조개어 isNaN 으로 검증하는 것은 괜찮은 방법으로 보임
    ```
    ```
    parseInt 는 명확하게 number 검증을 하지 못함   
    (이유는 정확히 모르겠으나 programmers test 에서 실패함)
    ```
    
    - **번외** :
    ```   
    parseInt("333aa") = 333   
    문자가 숫자 뒤에 올 경우 무시하고 parse 함
    ```