/**
 * @param {number[]} target
 * @return {boolean}
 */

var isPossible = function (target) {
  var target2 = target;
  var target1 = target;

  var canConstructTarget = false;
  var i = 0;

  if (
    target1.reduce((accumulator, currentValue) => accumulator + currentValue) %
      2 ===
    1
  ) {
    canConstructTarget = true;

    target.sort((a, b) => a - b);
    target2 = target.filter((item) => item !== 1);
    // console.log(target);

    var sumOfElements = 0;

    while (canConstructTarget && i < target2.length) {
      //   console.log("SUM: " + sumOfElements);
      //   console.log("TARGET: " + target2[i]);

      if (target2[i] !== 1) {
        if (target2[i] >= sumOfElements) {
          sumOfElements += target2[i];
        } else {
          canConstructTarget = false;
        }
      }
      i++;
    }
  }

  //   console.log(target2);
  for (let index = 0; index < target2.length; index++) {
    for (let j = index + 1; j < target2.length; j++) {
      //   console.log(target2[index]);
      //   console.log(target2[j]);
      if (target2[j] % target2[index] === 0) {
        canConstructTarget = false;
      }
    }
  }

  if (canConstructTarget !== false) {
    isPossibleTwo(target);
  }

  return canConstructTarget;
};

var isPossibleTwo = function (target) {
  var canConstruct = true;
  var done = false;
  var newTarget = target;

  while (!done) {
    var targetSum = newTarget;
    var sum = targetSum.reduce((acc, curr) => acc + curr);
    if (sum > target.length) {
      newTarget.sort((a, b) => b - a);
      var sumRest = newTarget
        .slice(1, newTarget.length)
        .reduce((acc, curr) => acc + curr);
      newTarget[0] = newTarget[0] - sumRest;
    } else if (sum === target.length) {
      done = true;
    } else {
      canConstruct = false;
      done = true;
    }
  }

  return canConstruct;
};

console.log("TRUE - " + isPossible([9, 3, 5]));
console.log("FALSE - " + isPossible([1, 1, 2]));
console.log("TRUE - " + isPossible([8, 5]));
console.log("TRUE - " + isPossible([1, 1, 999999999]));
console.log("FALSE - " + isPossible([2, 900000002]));
console.log("FALSE - " + isPossible([5, 50]));
console.log("TRUE - " + isPossible([1, 1000000000]));
console.log("FALSE - " + isPossible([1, 49, 11, 1, 25, 1, 7]));
