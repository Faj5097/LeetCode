/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function (nums) {
  var resSum = 0;
  nums.sort((a, b) => a - b);
  var uniqueNums = [];

  var lastValue = 0;
  var i = 0;
  nums.forEach((c) => {
    if (!uniqueNums.includes(c)) {
      uniqueNums.push(c);
      resSum += i * lastValue;
      lastValue = c;
      i = 1;
    } else {
      i++;
    }
  });

  console.log(resSum);

  if (uniqueNums.length == 1) {
    resSum += lastValue * i;
  } else {
    for (let index = 0; index < uniqueNums.length; index++) {
      for (let j = 0; j < uniqueNums.length; j++) {
        resSum += Math.floor(uniqueNums[index] / uniqueNums[j]);
      }
    }
  }

  return resSum;
};

console.log(sumOfFlooredPairs([2, 5, 9]));
