/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  set.add(n);

  while (n !== 1) {
    let val = 0;

    for (let i = 0; i < n.toString().length; i++) {
      let num = parseInt(n.toString()[i]);
      val += num * num;
    }

    if (set.has(val)) {
      return false;
    } else {
      set.add(val);
    }

    n = val;
  }

  return true;
};

console.log(isHappy(2));
