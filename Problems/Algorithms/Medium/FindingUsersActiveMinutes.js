/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let map = new Map();
  let arr = new Array(k).fill(0);

  for (let i = 0; i < logs.length; i++) {
    if (!map.has(logs[i][0])) {
      let mapArr = [];
      mapArr.push(logs[i][1]);
      map.set(logs[i][0], mapArr);
    } else if (!map.get(logs[i][0]).includes(logs[i][1])) {
      let mapArr = [];
      mapArr = [...map.get(logs[i][0]), logs[i][1]];
      map.set(logs[i][0], mapArr);
    }
  }

  for (const [key, value] of map.entries()) {
    arr[value.length - 1] += 1;
  }

  return arr;
};

console.log(
  findingUsersActiveMinutes(
    [
      [0, 5],
      [1, 2],
      [0, 2],
      [0, 5],
      [1, 3]
    ],
    5
  )
);
