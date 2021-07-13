/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let arr = new Array(26).fill(0);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      res += arr[i];
    }
  }

  return res;
};
