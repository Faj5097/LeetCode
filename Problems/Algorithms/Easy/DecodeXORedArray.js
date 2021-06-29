/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let ans = [];
  ans.push(first);

  for (let i = 0; i < encoded.length; i++) {
    ans.push(encoded[i] ^ ans[i]);
  }

  return ans;
};
