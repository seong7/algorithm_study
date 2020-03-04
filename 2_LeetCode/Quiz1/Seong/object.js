var romanToInt = function(s) {
    let int = 0;

    const roman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900,
    }
    
    const addValue = (rom) => {
        int += roman[rom];
         return true;
    }
    
    const toggleBoolean = (t_f) => {
        toCheck = !t_f;
        return true;
    }

    let toCheck = true;
    
    for(let i = 0; i<s.length; i++){
        if(toCheck){
            roman[s[i]] < roman[s[i+1]] ? 
            addValue(s[i]+s[i+1]) && toggleBoolean(toCheck) : addValue(s[i]);
        }else{
            toggleBoolean(toCheck);
        }
    }
    return int;
  };