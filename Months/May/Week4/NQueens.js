/**
 * @param {number} n
 * @return {string[][]}
 */
function arrayToString(arr) {
  var strArr = [];
  for (let i = 0; i < arr.length; i++) {
    var str = "";
    for (let j = 0; j < arr[i].length; j++) {
      str += arr[i][j];
    }
    strArr[i] = str;
  }
  return strArr;
}

function createArray(n) {
  var arr = [];

  for (let i = 0; i < n; i++) {
    var row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    arr.push(row);
  }

  return arr;
}

function setAttacked(arr, col, row) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {}
  }
}

var solveNQueens = function (n) {
  var arr = createArray(n);

  var startingRowIndex = 0;

  while (startingRowIndex < n) {
    arr = setAttacked(arr, startingRowIndex, 0);
    for (let i = 0; i < arr.length; i++) {}
  }
};

console.log(4);
