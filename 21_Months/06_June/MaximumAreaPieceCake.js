/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let horizLen = [];
  let vertLen = [];

  horizontalCuts = horizontalCuts.sort((a, b) => a - b);
  verticalCuts = verticalCuts.sort((a, b) => a - b);

  for (let i = 0; i < horizontalCuts.length; i++) {
    if (i === 0) {
      horizLen.push(horizontalCuts[i]);
    } else {
      horizLen.push(horizontalCuts[i] - horizontalCuts[i - 1]);
    }
  }
  horizLen.push(h - horizontalCuts[horizontalCuts.length - 1]);

  for (let i = 0; i < verticalCuts.length; i++) {
    if (i === 0) {
      vertLen.push(verticalCuts[i]);
    } else {
      vertLen.push(verticalCuts[i] - verticalCuts[i - 1]);
    }
  }
  vertLen.push(w - verticalCuts[verticalCuts.length - 1]);

  horizLen = horizLen.sort((a, b) => b - a);
  vertLen = vertLen.sort((a, b) => b - a);

  console.log(horizLen);
  console.log(vertLen);

  return (horizLen[0] * vertLen[0]) % 1000000007;
};

// console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1]));
