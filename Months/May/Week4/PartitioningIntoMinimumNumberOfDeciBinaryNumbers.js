/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let set = new Set(n.split(""));

  for (let i = 9; i > 0; i--) {
    if (set.has(i + "")) return i;
  }
};

console.log(minPartitions("27346209830709182346"));
