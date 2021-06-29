/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let maxDiff = 0;

  for (let i = 1; i < points.length; i++) {
    maxDiff = Math.max(points[i][0] - points[i - 1][0], maxDiff);
  }

  return maxDiff;
};
