/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let res = 0;
  if (n % 2 === 0) {
    let indexGoal = n / 2 - 1;
    let valGoal = indexGoal * 2 + 1 + 1;

    for (let i = 0; i <= indexGoal; i++) {
      res += valGoal - (i * 2 + 1);
    }
  } else {
    let indexGoal = Math.floor(n / 2);
    let valGoal = indexGoal * 2 + 1;

    for (let i = 0; i < indexGoal; i++) {
      res += valGoal - (i * 2 + 1);
    }
  }

  return res;
};
