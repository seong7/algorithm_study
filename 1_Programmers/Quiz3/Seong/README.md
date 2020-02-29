## 배열 정렬 문제

- ### Solution
    1. #### Selection Sort (선택 정렬) 이용 [>>](selectionSort.js)
    2. #### Array.prototype.sort((a,b) => a - b) 이용 [>>](sort.js)

        > 시간 측정 결과 둘 사이 별 차이 없음   
        > Readability 는 sort() 가 더 나음 

- ### 추가 학습
    - Array.prototype.sort((a,b) => a-b) 의 알고리즘 파악하기
    - ~~bestSolution 의 && 역할 파악하기~~ (코드에 메모함)
    - ~~Array.prototype.map() / Array.prototype.filter() 의 차이점~~
        > **.map( fn )** : fn 의 <u>return 요소</u> 들로 새로 구성된 Array return 한다.   
        > **.filter( fn )** : fn 을 <u>True 로 return 시키는 요소</u>들로 새로 구성된 Array return 한다. 