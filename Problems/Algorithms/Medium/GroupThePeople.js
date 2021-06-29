/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let map = new Map();
  let arr = [];

  for (let index = 0; index < groupSizes.length; index++) {
    if (map.has(groupSizes[index])) {
      map.get(groupSizes[index]).push(index);
    } else {
      map.set(groupSizes[index], [index]);
    }
    if (map.get(groupSizes[index]).length === groupSizes[index]) {
      arr.push(map.get(groupSizes[index]));
      map.delete(groupSizes[index]);
    }
  }

  return arr;
};
