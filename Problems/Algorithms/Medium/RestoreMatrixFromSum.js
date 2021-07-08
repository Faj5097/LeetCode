/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let rowArr = [];
  let colArr = [];
  let resArr = [];

  for (let i = 0; i < rowSum.length; i++) {
    rowArr.push({
      index: i,
      value: rowSum[i]
    });
  }

  for (let i = 0; i < colSum.length; i++) {
    colArr.push({
      index: i,
      value: colSum[i]
    });
    resArr.push(new Array(rowSum.length).fill(0));
  }

  for (let i = 1; i <= rowSum.length + colSum.length; i++) {
    let rowMinValue = 0;
    let colMinValue = 0;

    if (rowArr.length > 0) {
      rowArr.sort((a, b) => a.value - b.value);
      rowMinValue = rowArr[0];
    }

    if (colArr.length > 0) {
      colArr.sort((a, b) => a.value - b.value);
      colMinValue = colArr[0];
    }

    if (rowMinValue <= colMinValue) {
      resArr[rowMinValue][colMinValue.index] = rowMinValue;
      rowArr = rowArr.slice(1);
      colArr[0].value -= rowMinValue;
    } else {
      resArr[rowMinValue][colMinValue.index] = colMinValue;
      colArr = colArr.slice(1);
      rowArr[0].value -= rowMinValue;
    }
  }

  return resArr;
};
