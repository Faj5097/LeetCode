/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  let set = new Set();
  let len = right - left + 1;
  console.log(len);
  for (let i = 0; i < len; i++) {
    set.add(left);
    left++;
  }

  console.log(set);

  for (let i = 0; i < ranges.length; i++) {
    let l = ranges[i][0];
    let r = ranges[i][1];
    let len2 = r - l + 1;

    console.log(l);
    console.log(r);
    console.log(len2);

    for (let j = 0; j < len2; j++) {
      set.delete(l);
      l++;
    }
  }

  console.log(set);
  return set.size === 0 ? true : false;
};

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6]
    ],
    2,
    5
  )
);

// console.log(isCovered([[1, 50]], 1, 50));

// console.log(
//   isCovered(
//     [
//       [1, 10],
//       [10, 20]
//     ],
//     21,
//     21
//   )
// );

// console.log(
//   isCovered(
//     [
//       [25, 42],
//       [7, 14],
//       [2, 32],
//       [25, 28],
//       [39, 49],
//       [1, 50],
//       [29, 45],
//       [18, 47]
//     ],
//     15,
//     38
//   )
// );
