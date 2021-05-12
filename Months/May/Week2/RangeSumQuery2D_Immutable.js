/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const columnLength = matrix.length;
  const rowLength = matrix[0].length;

  let arr = matrix;
  //Calculate the sum for each column
  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      arr[i][j] = matrix[i][j];
      if (i != 0) {
        arr[i][j] += arr[i - 1][j];
      }
      if (j != 0) {
        arr[i][j] += arr[i][j - 1];
      }
      if (i != 0 && j != 0) {
        arr[i][j] -= arr[i - 1][j - 1];
      }
    }
  }

  this.arr = arr;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  var sum = this.arr[row2][col2];

  if (row1 != 0 && col1 != 0) {
    sum -= this.arr[row1][col2];
    sum -= this.arr[row2][col1];
    sum += this.arr[row1][col2];
  } else if (row1 != 0) {
    sum -= this.arr[row1][col2];
  } else if (col1 != 0) {
    sum -= this.arr[row2][col1];
  }

  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
