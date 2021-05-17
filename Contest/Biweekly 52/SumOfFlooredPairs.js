/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function (nums) {
  var resSum = 0;
  nums.sort((a, b) => b - a);

  var uniqueNums = [];

  var lastValue = 0;
  var i = 0;
  nums.forEach((c) => {
    if (!uniqueNums.includes(c)) {
      uniqueNums.push(c);
      console.log("VALUE: " + c);
      console.log("UNI RESSUM: " + resSum);
      console.log("UNI lastValue: " + lastValue);
      console.log("UNI i: " + i);
      console.log("--------");

      if (i > 0) {
        resSum += lastValue * (i + 1);
        resSum--;
        i = 0;
      }

      lastValue = c;
    } else {
      i++;
    }
  });

  if (i > 0) {
    resSum += lastValue * (i + 1);
    resSum--;
  }

  console.log(resSum);
  console.log(uniqueNums);

  for (let index = 0; index < uniqueNums.length; index++) {
    for (let j = 0; j < uniqueNums.length; j++) {
      if (index <= j) {
        resSum += Math.floor(uniqueNums[index] / uniqueNums[j]);
      }
    }
  }

  return resSum;
};

console.log(sumOfFlooredPairs([2, 5, 9]));
console.log(sumOfFlooredPairs([7, 7, 7, 7, 7, 7, 7]));
console.log(sumOfFlooredPairs([4, 3, 4, 3, 5]));
