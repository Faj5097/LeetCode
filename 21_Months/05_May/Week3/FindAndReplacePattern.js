/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

function mapToString(word) {
  let map = new Map();

  for (let i = 0; i < word.length; i++) {
    let arr;
    if (typeof map.get(word[i]) !== "undefined") {
      arr = map.get(word[i]);
    } else {
      arr = [];
    }
    arr.push(i);
    map.set(word[i], arr);
  }

  return map;
}

var findAndReplacePattern = function (words, pattern) {
  let resArr = [];

  let mapPattern = mapToString(pattern);
  let arrPattern = Array.from(mapPattern.values());
  //   console.log(arrPattern);

  words.forEach((word) => {
    let mapWord = mapToString(word);
    let arrWord = Array.from(mapWord.values());

    // console.log("--------------");
    // console.log(arrPattern);
    // console.log(arrWord);

    // console.log(JSON.stringify(arrPattern) === JSON.stringify(arrWord));
    if (JSON.stringify(arrPattern) === JSON.stringify(arrWord)) {
      resArr.push(word);
    }
  });

  return resArr;
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
