const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  const Arr1 = s1.split("");
  const Arr2 = s2.split("");
  let res = 0;
  for(let i = 0; i < Arr1.length; i++) {
    for(let j = 0; j < Arr2.length; j++) {
      if(Arr1[i] === Arr2[j]){
      
        Arr2.splice(j, 1)
        res++;
        break;
      }
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
