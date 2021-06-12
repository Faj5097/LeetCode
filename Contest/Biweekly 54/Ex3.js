/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let len = ans + 1;
      //   console.log("---");
      //   console.log(grid[i].length);
      //   console.log(grid.length);
      while (j + len < grid[i].length && i + len < grid.length) {
        // console.log("Länge:" + len);
        //sum Vertical
        let sumVert = 0;
        let sumHoriz = 0;
        let sumDiago1 = 0;
        let sumDiago2 = 0;
        // console.log(len);
        for (let k = 0; k <= len; k++) {
          sumVert += grid[i + k][j];
          sumHoriz += grid[i][j + k];
          sumDiago1 += grid[i + k][j + k];
          sumDiago2 += grid[i + len - k][j + len - k];
        }

        if (
          sumVert === sumHoriz &&
          sumDiago2 === sumDiago1 &&
          sumVert === sumDiago2
        ) {
          //   console.log(sumVert);
          if (len > ans) {
            ans = len;
          }
        }

        len++;
      }
    }
  }

  return ans === 0 ? 1 : ++ans;
};

console.log(
  largestMagicSquare([
    [7, 1, 4, 5, 6],
    [2, 5, 1, 6, 4],
    [1, 5, 4, 3, 2],
    [1, 2, 7, 3, 4]
  ])
);

console.log(
  largestMagicSquare([
    [5, 1, 3, 1],
    [9, 3, 3, 1],
    [1, 3, 3, 8]
  ])
);

console.log(
  largestMagicSquare([
    [4, 2, 4, 9, 8, 4, 10, 4],
    [3, 10, 10, 1, 5, 1, 1, 6],
    [1, 2, 2, 8, 1, 6, 4, 1],
    [4, 6, 8, 3, 5, 7, 8, 6],
    [6, 7, 3, 4, 9, 2, 10, 9],
    [10, 1, 6, 3, 2, 3, 4, 5]
  ])
);

console.log(largestMagicSquare([[1]]));
