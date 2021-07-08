/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let val = map.get(arr[i]);
      map.set(arr[i], val + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let res = -1;
  map.forEach((value, key) => {
    if (key == value) {
      res = key;
    }
  });

  return res;
};
