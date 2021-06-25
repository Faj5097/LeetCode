/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  let arr = [];

  for (let i = 0; i < queries.length; i++) {
    let r = queries[i][0];
    let t = queries[i][1];
    let sum = 0;

    for (let j = 0; j < points.length; j++) {
      if (
        Math.sqrt((r - points[j][0]) ** 2 + (t - points[j][1]) ** 2) <=
        queries[i][2]
      ) {
        sum++;
      }
    }
    arr.push(sum);
  }

  return arr;
};

console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2]
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2]
    ]
  )
);
