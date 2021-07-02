/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let arr = [];

  let lastIndex;
  let startingIndex;
  let i = 0;
  let newWord = true;

  while (i < s.length) {
    if (newWord) {
      startingIndex = i;
      lastIndex = s.lastIndexOf(s[i]);
      newWord = false;
    }

    if (i === lastIndex) {
      arr.push(lastIndex - startingIndex + 1);
      newWord = true;
    } else if (s.lastIndexOf(s[i]) > lastIndex) {
      lastIndex = s.lastIndexOf(s[i]);
    }

    i++;
  }

  return arr;
};
