/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    let a_bitLen = a.toString(2).split("0").join("").length;
    let b_bitLen = b.toString(2).split("0").join("").length;

    if (a_bitLen === b_bitLen) {
      return a - b;
    } else {
      return a_bitLen - b_bitLen;
    }
  });
};
