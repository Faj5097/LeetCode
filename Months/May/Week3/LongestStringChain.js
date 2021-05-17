/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);

  var longestChain = 0;
  var lastUnclearIndex = 0;
  var lastChain = 1;
  var buildNewChain = true;

  for (let i = 1; i < words.length - 1; i++) {
    if (words[lastUnclearIndex].length === words[i].length) {
      continue;
    } else {
      //is next element chain element?
      for (let j = 0; j < words[i].length; j++) {
        if (
          words[lastUnclearIndex] ===
          words[i].substring(0, j) + words[i].substring(j + 1, words[i].length)
        ) {
          lastChain++;
        }
      }
      console.log(
        words[i + 1].substring(0, j) +
          " + " +
          words[i + 1].substring(j + 1, words[i + 1].length)
      );
    }
  }

  console.log(words);
  console.log(lastChain);
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
