/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let substr = "";

  for (let i = 0; i < s.length; i++) {
    let index = substr.indexOf(s.charAt(i));
    if (index >= 0) {
      if (substr.length >= res) res = substr.length;

      substr = substr.slice(index + 1) + s.charAt(i);
    } else {
      substr += s.charAt(i);
    }
  }

  if (substr.length >= res) res = substr.length;

  return res;
};
