var romanToInt = function(s) {
    let int = 0;

    // const roman = new Map([
    //     ["I", 1],
    //     ["V", 5],
    //     ["X", 10],
    //     ["L", 50],
    //     ["C", 100],
    //     ["D", 500],
    //     ["M", 1000],
    //     ["IV", 4],
    //     ["IX", 9],
    //     ["XL", 40],
    //     ["XC", 90],
    //     ["CD", 400],
    //     ["CM", 900]
    // ]);                        // 위보다 아래가 더 빨랐음

    const roman = new Map();
    roman.set("I", 1);
    roman.set("V", 5);
    roman.set("X", 10);
    roman.set("L", 50);
    roman.set("C", 100);
    roman.set("D", 500);
    roman.set("M", 1000);
    roman.set("IV", 4);
    roman.set("IX", 9);
    roman.set("XL", 40);
    roman.set("XC", 90);
    roman.set("CD", 400);
    roman.set("CM", 900);
    
    const addValue = (rom) => {
        int += roman.get(rom);
         return true;
    }
    
    const toggleBoolean = (t_f) => {
        toCheck = !t_f;
        return true;
    }

    let toCheck = true;
    
    for(let i = 0; i<s.length; i++){
        if(toCheck){
            roman.get(s[i]) < roman.get(s[i+1]) ? 
            addValue(s[i]+s[i+1]) && toggleBoolean(toCheck) : addValue(s[i]);
        }else{
            toggleBoolean(toCheck);
        }
    }
    return int;
  };