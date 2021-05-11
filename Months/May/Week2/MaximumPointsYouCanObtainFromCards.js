function findIndex(cardPointsIndex, cardPointsCompare, k) {
  for (let index = 0; index < Math.floor(cardPointsIndex.length / 2); index++) {
    var sumRight = cardPointsCompare
      .slice(index + 1, k)
      .reduce((arr, curr) => arr + curr);

    if (cardPointsIndex[index] >= sumRight) {
      return index;
    }
  }

  return Math.floor(cardPointsIndex.length / 2);
}

function sumCardPoints(cardPoints_1, firstIndex_1, cardPoints_2, k) {
  return (maxSum =
    cardPoints_1.slice(firstIndex_1, k).reduce((acc, curr) => acc + curr) +
    (firstIndex_1 !== 0
      ? cardPoints_2
          .slice(k - firstIndex_1, k)
          .reduce((acc, curr) => acc + curr)
      : 0));
}

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  maxSum = 0;

  console.log(cardPoints);

  //Split the incoming array in two arrays with max. k Rows
  var cardPointsLeft = cardPoints.slice(0, k).reverse();
  var cardPointsRight = cardPoints.reverse().slice(0, k).reverse();

  var firstIndexLeft = findIndex(cardPointsLeft, cardPointsRight, k);
  var firstIndexRight = findIndex(cardPointsRight, cardPointsLeft, k);

  console.log(cardPointsLeft);
  console.log(firstIndexLeft);
  console.log(cardPointsRight);
  console.log(firstIndexRight);

  var one = sumCardPoints(cardPointsLeft, firstIndexLeft, cardPointsRight, k);
  var two = sumCardPoints(cardPointsLeft, firstIndexRight, cardPointsRight, k);
  var three = sumCardPoints(cardPointsRight, firstIndexLeft, cardPointsLeft, k);
  var four = sumCardPoints(cardPointsRight, firstIndexRight, cardPointsLeft, k);

  var arr = [one, two, three, four];
  console.log(arr);
  return Math.max(...arr);
};

// console.log("12 - " + maxScore([1, 2, 3, 4, 5, 6, 1], 3));
// console.log("55 - " + maxScore([9, 7, 7, 9, 7, 7, 9], 7));
// console.log("4 - " + maxScore([2, 2, 2], 2));
// console.log("1 - " + maxScore([1, 1000, 1], 1));
// console.log("202 - " + maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
// console.log("232 - " + maxScore([11, 49, 100, 20, 86, 29, 72], 4));
// console.log("12 - " + maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("536 - " + maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8));
