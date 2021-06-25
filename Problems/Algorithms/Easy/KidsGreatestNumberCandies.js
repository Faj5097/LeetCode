/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  candies.sort((a, b) => b - a);

  let arr = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= candies[0]) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }

  return arr;
};
