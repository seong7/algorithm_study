function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let sArr = s.split('').sort();
        let tArr = t.split('').sort();
        let ret = [];

        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] === tArr[i]) ret.push(sArr[i]);
        }

        if (sArr.length === ret.length) {
            return true;
        }
        return false;

        // return sArr.length === ret.length;
    }
}

console.log(isAnagram("anagram", "nagaram"));