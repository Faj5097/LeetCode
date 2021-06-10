/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] = accounts[i].reduce((acc, curr) => acc + curr);
  }

  return accounts.sort((a, b) => b - a)[0];
};
