/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rowMax = new Array(grid.length).fill(0);
  let colMax = new Array(grid.length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (rowMax[i] < grid[i][j]) {
        rowMax[i] = grid[i][j];
      }

      if (colMax[j] < grid[i][j]) {
        colMax[j] = grid[i][j];
      }
    }
  }

  let sum = 0;

  for (let i = 0; i < rowMax.length; i++) {
    for (let j = 0; j < colMax.length; j++) {
      let newVal = Math.min(rowMax[i], colMax[j]);
      sum += Math.abs(grid[i][j] - newVal);
    }
  }

  return sum;
};
