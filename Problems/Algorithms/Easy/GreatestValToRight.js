/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let max = Math.max(...arr.slice(i + 1));
    res.push(max);
    i = arr.slice(i + 1).indexOf(max);
  }

  res.push(-1);
  return res;
};
