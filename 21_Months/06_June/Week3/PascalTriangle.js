/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];
  let i = 1;

  while (i < numRows) {
    let arr = [1];
    for (let j = 0; j < ans[i - 1].length - 1; j++) {
      let left = ans[i - 1][j];
      let right = ans[i - 1][j + 1];
      arr.push(left + right);
    }
    arr.push(1);
    ans.push(arr);
    i++;
  }

  return ans;
};

console.log(generate(5));
