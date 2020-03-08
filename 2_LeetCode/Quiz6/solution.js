/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sort = (str)=>{
      return str.split("").sort((a, b) => {
          return +(a < b) || +(a === b) -1;
      }).join("");
  }
  
  return sort(s) === sort(t);
};