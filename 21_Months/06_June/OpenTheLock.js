/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

function setNextValue(value) {
  if (value === 9) {
    value = 0;
  } else {
    value <= 5 ? value-- : value++;
  }
  return value;
}

function findNextLockPos(arr) {
  if (arr[0] !== 0) {
    arr[0] = setNextValue(arr[0]);
  } else if (actArr[1] !== 0) {
    arr[1] = setNextValue(arr[1]);
  } else if (actArr[2] !== 0) {
    arr[2] = setNextValue(arr[2]);
  } else if (actArr[3] !== 0) {
    arr[3] = setNextValue(arr[3]);
  }

  return arr;
}

var openLock = function (deadends, target) {
  let targetArr = [];
  Array.from(target).forEach((element) => {
    targetArr.push(parseInt(element));
  });
  let actArr = [...targetArr];

  while ([...actArr] === [0, 0, 0, 0]) {}

  console.log(actArr);
};

console.log(
  "6 -- " + openLock(["0201", "0101", "0102", "1212", "2002"], "0202")
);
// console.log("1 -- " + openLock(["8888"], "0009"));
// console.log(
//   "-1 -- " +
//     openLock(
//       ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
//       "8888"
//     )
// );
// console.log("-1 -- " + openLock(["0000"], "8888"));
