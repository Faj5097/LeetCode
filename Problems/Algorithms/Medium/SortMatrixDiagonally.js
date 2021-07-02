/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  //Do the rows
  for (let i = 0; i < mat.length; i++) {
    let col = 0;
    let row = i;
    let arr = [];
    while (col < mat[0].length && row < mat.length) {
      arr.push(mat[row][col]);
      col++;
      row++;
    }
    arr.sort((a, b) => a - b);

    col = 0;
    row = i;
    while (col < mat[0].length && row < mat.length) {
      mat[row][col] = arr[col];
      col++;
      row++;
    }
  }

  //Do the columns apart the first one
  for (let i = 1; i < mat[0].length; i++) {
    let col = i;
    let row = 0;
    let arr = [];
    while (col < mat[0].length && row < mat.length) {
      arr.push(mat[row][col]);
      col++;
      row++;
    }
    arr.sort((a, b) => a - b);

    col = i;
    row = 0;
    while (col < mat[0].length && row < mat.length) {
      mat[row][col] = arr[row];
      col++;
      row++;
    }
  }

  return mat;
};
