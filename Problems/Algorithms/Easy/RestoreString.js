/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let ans = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    ans[indices[i]] = s[i];
  }

  return ans.join("");
};
