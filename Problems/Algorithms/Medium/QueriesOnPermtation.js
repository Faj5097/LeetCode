/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
function createArray(m) {
  let arr = [];

  for (let i = 1; i <= m; i++) {
    arr.push(i);
  }

  return arr;
}

var processQueries = function (queries, m) {
  let arr = createArray(m);
  let res = [];

  for (let i = 0; i < queries.length; i++) {
    let index = arr.indexOf(queries[i]);
    res.push(index);
    arr.splice(index, 1);
    arr = [queries[i], ...arr];
  }

  return res;
};
