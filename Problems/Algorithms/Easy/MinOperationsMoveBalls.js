/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let ans = [];
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (i !== j && boxes[j] !== "0") {
        sum += Math.abs(i - j);
      }
    }
    ans.push(sum);
  }

  return ans;
};
