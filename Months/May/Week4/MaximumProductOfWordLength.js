/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let ans = 0;
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (arr.length === i) {
      arr.push(new Set(words[i].split("")));
    }

    for (let j = i + 1; j < words.length; j++) {
      if (arr.length <= j) {
        arr.push(new Set(words[j].split("")));
      }

      let set = new Set();
      if (new Set([...arr[i], ...arr[j]]).size === arr[i].size + arr[j].size) {
        let product = words[i].length * words[j].length;
        if (product > ans) {
          ans = product;
        }
      }
    }
  }

  return ans;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
